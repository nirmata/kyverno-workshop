# Module 2: Installation & Policy Overview


## Task 1

Create a Kubernetes cluster

```sh
k3d cluster create kyverno
```

Add the Kyverno Helm repo

```sh
helm repo add kyverno https://kyverno.github.io/kyverno/
```

Update your repos to fetch the latest chart versions

```sh
helm repo update
```

Install the Kyverno chart with a single replica in your lab environment

```sh
helm install kyverno kyverno/kyverno -n kyverno --create-namespace
```

Set your alias to kubectl to save on typing

```sh
alias k=kubectl
```

Check the status and ensure the Kyverno Pod is running

```sh
k get po -n kyverno
```

## Task 2


Inspect all the CRDs Kyverno creates

```sh
k get crd | grep kyverno
```

Explore a ClusterPolicy

```sh
k explain clusterpolicy

k explain clusterpolicy.spec
```

See all the possibilities in a `match` block

```sh
k explain clusterpolicy.spec.rules.match.any --recursive
```

Inspect the sample policy `clusterpolicy.yaml` manifest and answer the following questions:

1. What type of policy is this, Policy or ClusterPolicy?
2. How many rules does it contain?
3. What type of Kubernetes resource (kind) does each rule target?
4. Would the first rule apply to the given resource kind if it carried the label `app=minor`?
5. Would the second rule apply if the matching resource was located in a Namespace containing the label `zone=region-c`?