# Module 3: Pod Security Admission

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
-   Don’t offer granular permissions
	-   Limited to applying PSS policies only
	-   **Example:** Can’t have a policy to only allow pods with `securityContext.privileged:  false`
-   Designed to rely on third-party tools such as Kyverno and OPA for finer control

## Task 2

Let us see how Kyverno can help address the above limitations.

1. Create the Policy
```yaml
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: disallow-privilege-escalation
  annotations:
    policies.kyverno.io/title: Disallow Privilege Escalation
    policies.kyverno.io/category: Pod Security Standards (Restricted)
    policies.kyverno.io/severity: medium
    policies.kyverno.io/subject: Pod
    kyverno.io/kyverno-version: 1.6.0
    kyverno.io/kubernetes-version: "1.22-1.23"
    policies.kyverno.io/description: >-
      Privilege escalation, such as via set-user-ID or set-group-ID file mode, should not be allowed.
      This policy ensures the `allowPrivilegeEscalation` field is set to `false`.      
spec:
  validationFailureAction: enforce
  background: true
  rules:
    - name: privilege-escalation
      match:
        any:
        - resources:
            kinds:
              - Pod
      validate:
        message: >-
          Privilege escalation is disallowed. The fields
          spec.containers[*].securityContext.allowPrivilegeEscalation,
          spec.initContainers[*].securityContext.allowPrivilegeEscalation,
          and spec.ephemeralContainers[*].securityContext.allowPrivilegeEscalation
          must be set to `false`.          
        pattern:
          spec:
            =(ephemeralContainers):
            - securityContext:
                allowPrivilegeEscalation: "false"
            =(initContainers):
            - securityContext:
                allowPrivilegeEscalation: "false"
            containers:
            - securityContext:
                allowPrivilegeEscalation: "false"
```
2. Attempt to admit the Pod
```bash
k -n test-psa run nginx --image=nginx
```
3. Now try the following
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
  labels:
    purpose: production
spec:
  containers:
  - name: nginx
    image: nginx:1.14.2
    securityContext:
      allowPrivilegeEscalation: false
```
