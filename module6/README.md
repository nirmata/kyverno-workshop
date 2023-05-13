# Module 6: Policy Exceptions

Policy Exceptions is currently an `alpha` feature, available behind the `--enablePolicyException` flag. Let's enable the feature in `kyverno` first by setting this flag to `true`.
```bash
k -n kyverno edit deploy kyverno
...
      containers:
      - args:
        - --loggingFormat=text
        - --exceptionNamespace=kyverno
        - --enablePolicyException=true
        env:
        - name: INIT_CONFIG
...
```

## Task

Say, we want our cluster to be running containers with version-tagged images. However, this is not a strict requirement for `dev` Pods which run with the label `type=dev` and use images created directly from the development branch which are tagged `latest`. As seen earlier, we can use the following Policy for ensuring we run version-tagged images:
```yaml
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: disallow-latest-tag
  annotations:
    policies.kyverno.io/title: Disallow Latest Tag
    policies.kyverno.io/category: Best Practices
    policies.kyverno.io/minversion: 1.6.0
    policies.kyverno.io/severity: medium
    policies.kyverno.io/subject: Pod
    policies.kyverno.io/description: >-
      The ':latest' tag is mutable and can lead to unexpected errors if the
      image changes. A best practice is to use an immutable tag that maps to
      a specific version of an application Pod. This policy validates that the image
      specifies a tag and that it is not called `latest`.      
spec:
  validationFailureAction: Enforce
  background: true
  rules:
  - name: require-image-tag
    match:
      any:
      - resources:
          kinds:
          - Pod
    validate:
      message: "An image tag is required."
      pattern:
        spec:
          containers:
          - image: "*:*"
  - name: validate-image-tag
    match:
      any:
      - resources:
          kinds:
          - Pod
    validate:
      message: "Using a mutable image tag e.g. 'latest' is not allowed."
      pattern:
        spec:
          containers:
          - image: "!*:latest"
```
We can prevent this Policy from being applied to the `dev` Pods by using the following Policy Exception:
```yaml
apiVersion: kyverno.io/v2alpha1
kind: PolicyException
metadata:
  name: pe-disallow-latest-tag
  namespace: kyverno
spec:
  exceptions:
  - policyName: disallow-latest-tag
    ruleNames:
    - require-image-tag
    - validate-image-tag
  match:
    all:
    - resources:
        kinds:
        - Pod
        namespaces:
        - test
        selector:
          matchLabels:
            type: dev
```
Create the `test` namespace
```sh
k create ns test
```
Test by admitting the following Pods:
1. `k -n test run nginx-dev --image=nginx:latest --labels type=dev`
2. `k -n test run nginx-prod --image=nginx:latest --labels type=prod`
