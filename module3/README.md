# Module 3: Validation & Policy Reports

In this lab you will get familiar with some of the basics of Kyverno by
examining `validate` rules and understanding how they impact policy reports.


## Task 1

Study the policy manifest `require-labels.yaml` and answer the below questions.

In what mode is this policy configured?

What resource(s) does this rule match?

Apply the `require-labels.yaml` policy manifest to your cluster.

```sh
k apply -f require-labels.yaml
```

Get all ClusterPolicy resources and ensure it reports ready.

```sh
k get cpol
```

Apply the `ns.yaml` resource manifest to your cluster.

```sh
k apply -f ns.yaml
```

What happened and why?

Fix then re-apply the Namespace resource defined in `ns.yaml` so it passes the policy.


----------------------------------------------------------------------------------------------


As a member of the SRE team, you have received a request from management
to place restrictions on the type of workloads in the `warehouse` Namespace.
Specifically, they wish to control the use of ServiceAccounts in that Namespace
to only permit ones which are custom, thus disallowing use of any defaults.


## Task 2


Modify the incomplete `check-sa.yaml` ClusterPolicy manifest so it does two things:

1. Only applies to the `warehouse` Namespace
2. Prevents Pods from using the `default` named ServiceAccount

**NOTE**: Do not use deprecated fields in a resource spec. Do not change the policy type.

Use the `sa-pod.yaml` resource manifest to test your policy to ensure it blocks the Pod.

After ensuring your policy is effective in blocking the Pod, perform the necessary
steps in the cluster to prove a "good" Pod can be successfully created. Once performing
those steps, modify the `sa-pod.yaml` resource as necessary and re-apply until the Pod is allowed
to be created.

**HINT**: You should not modify the policy at this point.


----------------------------------------------------------------------------------------------


## Task 3

Modify the `check-sa` ClusterPolicy manifest to change the mode to `audit` instead.

Modify the `sa-pod.yaml` resource manifest so it now does use the `default` ServiceAccount.
Change the name of the Pod so as to not create a conflict with the existing one (if present).

Apply the `sa-pod.yaml` resource manifest. It should be allowed.

Describe the PolicyReport resource in the `warehouse` Namespace to understand what it shows.

```sh
k -n warehouse describe polr polr-ns-warehouse
```

Clean up all policies from this lab.

```sh
k delete cpol --all
```
