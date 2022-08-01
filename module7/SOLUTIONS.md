## Task 1

After applying the Pod to the policy, it should be scored as a pass.

Inspecting the output of the CLI should show that an additional label `owner=czoller` was assigned.

After running the command `k kyverno apply apply-add-labels.yaml -r pod.yaml -r sa.yaml` you should notice that an additional result is printed but is a skip. This is because the `apply-add-labels` ClusterPolicy has a rule which matches only on Pods, yet you have passed two resources: a Pod and a ServiceAccount. The ServiceAccount will be skipped by this policy.

## Task 2

The initial run of the `test` command here produces one Pass and one Fail result. The Fail because the `goodpod` resource being tested has been declared to pass in the `kyverno-test.yaml` test manifest, yet the actual result upon running by the `host-ports-none` rule in the `disallow-host-ports` ClusterPolicy is that it fails. Since the actual result does not agree with the specified result, this is scored as a Fail.

Modifying the `godpod` resource in `resource.yaml` to result in a Pass should look like the following. Note the removal of the `hostPort` line.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: goodpod
spec:
  containers:
  - name: container01
    image: dummyimagename
    ports:
    - name: dns
      containerPort: 5553
```

In order to extend the test cases to add a skip result, modify the `resource.yaml` file to add a new Pod which is written so that it is excluded from processing. An example of this may look like the below. Note how the name here is written such that it is caught by the `exclude` statement in the policy.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-calico-pod
spec:
  containers:
  - name: container01
    image: dummyimagename
    ports:
    - name: dns
      containerPort: 5553
      hostPort: 443
```

The modification to the `kyverno-test.yaml` test manifest should look like the following based upon the Pod name you decided upon.

```yaml
- policy: disallow-host-ports
rule: host-ports-none
resource: my-calico-pod
kind: Pod
result: skip
```