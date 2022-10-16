In this lab, you will install Kyverno and experience working with `validate` and `mutate` rules.

## Task 1

Create a Kubernetes cluster. You may use any software with which you feel most comfortable, however this course
provides steps for K3d.

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

Set your alias to kubectl to save on typing. This step is optional, however
subsequent commands given throughout this course will use `k` to alias `kubectl`.

```sh
alias k=kubectl
```

Check the status and ensure the Kyverno Pod is running

```sh
k get po -n kyverno
```

## Task 2

In this task, you will get familiar with some of the basics of Kyverno by
examining `validate` rules.

Open the `validate-labels.yaml` policy and inspect it. What does this do?

Create the policy in your test cluster.

```sh
k create -f validate-labels.yaml
```

Check the policy to ensure it reports ready. The alias `cpol` is used here to represent the ClusterPolicy Custom Resource.
A ClusterPolicy applies to the entire cluster whereas a Policy applies to a specific Namespace.

```sh
k get cpol
```

Attempt to create a "bad" Namespace and observe the result.

```sh
k apply -f ns-bad.yaml
```

Now attempt to create a "good" Namespace and observe the result.

```sh
k apply -f ns-good.yaml
```


## Task 3

In this task, you will get a basic understanding of Kyverno `mutate` rules by creating a mutation in your cluster.

