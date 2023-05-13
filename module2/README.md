# Module 2: Kubernetes Best Practices using Kyverno
Enforcing Kubernetes Best Practices becomes easier with Kyverno. This module covers some of the basic standards to get started with as you evolve in your policy and governance journey.

For this exercise, we will use a combination of policies from the [kyverno/policies](https://github.com/kyverno/policies) repo and also [nirmata/kyverno-policies](https://github.com/nirmata/kyverno-policies) repo.

Clone both the repositories.
```sh
git clone git@github.com:nirmata/kyverno-policies.git
git clone git@github.com:kyverno/policies.git
```

## Pod Security Standards (PSS)
The Pod Security Standards define three different profiles to broadly cover the security spectrum. These profiles are cumulative and range from highly-permissive to highly-restrictive. For more information on PSS, refer to the official [Kubernetes documentation](https://kubernetes.io/docs/concepts/security/pod-security-standards/)

## Task 1
In this task, we will first run a bad pod and understand how easy it is to run pods with elevated privileges which is a high security risk. We will then see how best practices such as Pod Security Standards help prevent such issues.

```sh
kubectl run r00t --restart=Never -ti --rm --image lol --overrides '{"spec":{"hostPID": true, "containers":[{"name":"1","image":"alpine:latest","command":["/bin/sh"],"stdin": true,"tty":true,"securityContext":{"privileged":true}}]}}'
```

Install [pod security standard restricted](https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted) policies in enforce mode:

```sh
kustomize build https://github.com/kyverno/policies/pod-security/enforce | k apply -f -
```

Now let us try to run the bad pod again.
```sh
k run r00t2 --restart=Never -ti --rm --image lol --overrides '{"spec":{"hostPID": true, "containers":[{"name":"1","image":"public.ecr.aws/h1a5s9h8/alpine:latest","command":["nsenter","--mount=/proc/1/ns/mnt","--","/bin/bash"],"stdin": true,"tty":true,"securityContext":{"privileged":true}}]}}'
```

### Using Kyverno to implement PSS
The `Baseline/Default` profile is minimally restrictive and denies the most common vulnerabilities while the `Restricted` profile is more heavily restrictive but follows many more of the common security best practices for Pods.

```sh
cd policies/pod-security
k apply -k .
```

Let us take a look at all the policies applied.
```sh
k get polr -A
```

## RBAC
Kubernetes RBAC is the primary authorization mechanism in Kubernetes. While powerful, it is prone to misconfigurations. When designing permissions, it is important to understand where privilege escalation could occur and to minimize the risk of security incidents due to permissive access. The controls are derived from the official [Kubernetes RBAC Good Practices](https://kubernetes.io/docs/concepts/security/rbac-good-practices/).


### Using Kyverno to implement RBAC

```sh
cd kyverno-policies/rbac
k apply -k .
```

Let us take a look at all the policies applied.
```sh
k get polr -A
```
