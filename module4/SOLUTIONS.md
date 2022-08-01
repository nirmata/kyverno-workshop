## Task 1

The modified `aws-service.yaml` is shown below.

```yaml
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: aws-service
spec:
  rules:
  - name: add-service-annotations
    match:
      any:
      - resources:
          kinds:
          - Service
    mutate:
      patchStrategicMerge:
        metadata:
          annotations:
            +(service.beta.kubernetes.io/aws-load-balancer-scheme): internet-facing
```

## Task 2

Create the `qa2` Namespace if it is not yet created.

```sh
k create ns qa2
```

The modified `qa-runasnonroot.yaml` policy is shown below.

```yaml
apiVersion: kyverno.io/v1
kind: Policy
metadata:
  name: qa2-security
  namespace: qa2
spec:
  rules:
  - name: runasnonroot
    match:
      any:
      - resources:
          kinds:
          - Pod
    mutate:
      patchesJson6902: |-
        - path: /spec/securityContext/runAsNonRoot
          op: add
          value: true
```
