# Module 7: Cleanup Policies

Periodically, we might want to cleanup our cluster and keep only those resources which are necessary. Kyverno supports Cleanup Policies which do exactly this.

## Task 1

The following Policy when deployed would automatically clear `Pods` which are no longer needed every `1 minute`. But first, we must assign the proper permissions to Kyverno's Cleanup Controller.
```bash
k edit clusterrole kyverno:cleanup-controller:core
...
- apiGroups:
  - ""
  resources:
  - pods
  verbs:
  - list
  - get
  - delete
```

```yaml
apiVersion: kyverno.io/v2alpha1
kind: ClusterCleanupPolicy
metadata:
  name: cleanup-pods
spec:
  match:
    any:
    - resources:
        kinds:
          - Pod
        selector:
          matchLabels:
            canRemove: "true"
  schedule: "*/1 * * * *"
```
```bash
k run nginx --image=nginx:1.23 --labels canRemove=true
```

## Task 2

Let's try modifying the above Cleanup Policy to cleanup the following Policy Exception:
```yaml
apiVersion: kyverno.io/v2alpha1
kind: PolicyException
metadata:
  name: pe-disallow-latest-tag
  namespace: default
  labels:
    canRemove: "true"
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

Grant the Cleanup Controller appropriate permissions:
```bash
k edit clusterrole kyverno:cleanup-controller:core
...
- apiGroups:
  - "kyverno.io"
  resources:
  - policyexceptions
  verbs:
  - list
  - get
  - delete
```

Create the Cleanup Policy:
```yaml
apiVersion: kyverno.io/v2alpha1
kind: ClusterCleanupPolicy
metadata:
  name: cleanup-pe
spec:
  match:
    any:
    - resources:
        kinds:
          - PolicyExceptions
        selector:
          matchLabels:
            canRemove: "true"
  schedule: "*/1 * * * *"
```

Test by creating the Pod in the `kyverno` namespace:
```bash
k get polex -w
```
