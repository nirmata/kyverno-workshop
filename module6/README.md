# Module 3: Policy Exceptions

Policy Exceptions isn't GA yet, so we must enable the feature first by adding `--enablePolicyException=true` to `kyverno` container arguments.
```bash
$ k -n kyverno edit deploy kyverno
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

## Task 1

Say we want our cluster to be running containers with stable images. However, there's one namespace `dev` dedicated to your engineering team where they need images created directly from the development branch which are tagged `latest`. As seen earlier, we can use the following Policy for ensuring we run stable images:
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
  validationFailureAction: audit
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
We can prevent this Policy from being applied to the `dev` namespace using Policy Exceptions.
```yaml
apiVersion: kyverno.io/v2alpha1
kind: PolicyException
metadata:
  name: pe-disallow-latest-tag
  namespace: default
spec:
  exceptions:
  - policyName: disallow-latest-tag
    ruleNames:
    - require-image-tag
    - validate-image-tag
  match:
    any:
    - resources:
        kinds:
        - Pod
        namespaces:
        - kyverno
        - test
```
