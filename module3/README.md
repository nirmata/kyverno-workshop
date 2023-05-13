# Module 3: Pod Security

Pod Security Policies (PSPs) were removed starting K8s `1.25` . PSPs were designed to control the security specification of Pods. However, they were not intuitive to use. They're now replaced by Pod Security Admission (PSAs) which help enforce Pod Security Standards (PSSs) on a namespace level.

Pod Security Standards define three policies to broadly cover the security spectrum:
-   **privileged**
	-   Anything is allowed!
	-   Unrestricted
	-   System & Infra-level workloads
-   **baseline**
	-   Minimally restricted
	-   Common workloads
-   **restricted**
	-   Heavily restricted
	-   Security critical workloads

## Task 1

The following Policy would create a namespace with the `restricted` Pod Security Admission configuration.

1. Create the namespace
```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: test-psa
  labels:
    pod-security.kubernetes.io/enforce: restricted
```
2. Attempt a pod admission
```bash
k -n test-psa run nginx --image=nginx
```

## PSA Limitations

-   PSA and PSS were designed for simplicity of deployment and adoption
	-   They are limited on their own
-   Restricted in scope
	-   Applied at a namespace level
	-   **Example:** Filtering based on label (`purpose:  prod`) not supported
-   Don't offer granular permissions
	-   Limited to applying PSS policies only
	-   **Example:** Can't have a policy to only allow pods with `securityContext.privileged:  false`
-   Designed to rely on third-party tools such as Kyverno and OPA for finer control

## Task 2

PSA is designed to act on every Pod in the specified namespace, let us see how we can add exceptions for specific Pods.

1. Create the Policy
```yaml
apiVersion: kyverno.io/v1
kind: Policy
metadata:
  name: psa-host-namespaces
  namespace: default
spec:
  background: true
  validationFailureAction: Enforce
  rules:
  - name: restricted
    match:
      any:
      - resources:
          kinds:
          - Pod
    validate:
      podSecurity:
        level: restricted
        version: latest
        exclude:
        - controlName: Host Namespaces
```
2. Attempt to admit the Pod
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: badpod01
spec:
  containers:
  - name: container01
    image: dummyimagename
    securityContext:
      privileged: true
```
3. Now try the following
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: badpod02
spec:
  hostIPC: true
  containers:
  - name: container01
    image: dummyimagename
```
