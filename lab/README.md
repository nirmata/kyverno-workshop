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

Open the `mutate-pods.yaml` ClusterPolicy and inspect it.

Create the ClusterPolicy in your test cluster.

```sh
k apply -f mutate-pods.yaml
```

Create the Pod in the `pod.yaml` file.

```sh
k apply -f pod.yaml
```

Inspect the Pod and see if the mutation was applied. Although we did not create a Secret called `somesecret`, it should not prevent the mutation from occuring.

```sh
k get po mypod -o yaml
```

Once you've verified that the mutation occured on the bare Pod, try to create the Deployment defined in `deployment.yaml`.

Inspect the Deployment definition. Did the mutation occur here?

```sh
k get deploy mydeployment -o yaml
```

The Deployment should also have been mutated as a result of Kyverno's Pod controller rule auto-generation feature described at https://kyverno.io/docs/writing-policies/autogen/. Although the ClusterPolicy named `mutate-pods` was only written to match on Pods, Kyverno intelligently and automatically translated this rule to apply to Deployments thereby matching and mutating the `mydeployment` resource.
