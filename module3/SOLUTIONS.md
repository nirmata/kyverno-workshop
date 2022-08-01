## Task 1

Answers:

1. Enforce mode
2. Namespaces
3. The creation of the Namespace should fail because it does not contain a label with key of `owner`. The following updated version of `ns.yaml` should result in successful creation.

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: warehouse
  labels:
    app-type: corp
```


## Task 2

`check-sa.yaml`

```yaml
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: check-sa
spec:
  validationFailureAction: enforce
  background: false
  rules:
    - name: check-sa
      match:
        resources:
          kinds:
          - Pod
          namespaces:
          - warehouse
      validate:
        message: Default ServiceAccount is forbidden.
        spec:
          serviceAccountName: "!default"
```

Create a ServiceAccount named `foo` in order for the modified Pod to use it.

```sh
k -n warehouse create serviceaccount foo
```

The modified `sa-pod.yaml` is shown below.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mypod
  namespace: warehouse
spec:
  serviceAccountName: foo
  containers:
  - name: busybox
    image: busybox:1.28
    resources:
      requests:
        cpu: 100m
        memory: 50Mi
      limits:
        memory: 1Gi
    args:
    - sleep
    - "9999"
```

## Task 3

The modified `check-sa.yaml` policy is shown below.

```yaml
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: check-sa
spec:
  validationFailureAction: audit
  background: false
  rules:
    - name: check-sa
      match:
        resources:
          kinds:
          - Pod
          namespaces:
          - warehouse
      validate:
        message: Default ServiceAccount is forbidden.
        spec:
          serviceAccountName: "!default"
```

The modified `sa-pod.yaml` is shown below.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mypod
  namespace: warehouse
spec:
  serviceAccountName: default
  containers:
  - name: busybox
    image: busybox:1.28
    resources:
      requests:
        cpu: 100m
        memory: 50Mi
      limits:
        memory: 1Gi
    args:
    - sleep
    - "9999"
```
