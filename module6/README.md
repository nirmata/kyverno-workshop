# Module 6: Image Verification

Your organization is embarking on an internal supply chain security journey, and
the first step you are taking is signing and verifying the container images you build which run
in your restricted, production Kubernetes environments. Your images are built from source
using GitHub Actions in a CI pipeline of your design and signed with Cosign's keyless
signing ability which uses a "public good" instance of the necessary Internet- and
freely-accessible infrastructure to both sign and verify signatures without requiring the burden of maintaining keys
yourself. This process is working properly and efficiently. Now, you wish to take the next step and verify
those images using Kyverno prior to running them in your cluster.


## Task 1

First, inspect the ClusterPolicy defined in the manifest `keyless-sig-verification.yaml`. Which
image(s) will be verified after this policy is created?

Create the ClusterPolicy in your lab environment and ensure it reports as ready.

Apply the Pod manifest `keyless-pod.yaml` and ensure the Pod is successfully created.

**NOTE**: This verification process may take longer than previous verifications. Do not cancel the process.

Test the efficacy of the policy by deleting the Pod you just created, changing the value of the `issuer` field,
replacing the ClusterPolicy, and re-submitting the same Pod. Is it blocked?

Prior to proceeding with Task 2, ensure the Pod exists in the cluster.


## Task 2

With the Pod created in Task 1, inspect the image referenced in the Pod. How is this value
different from the value of the same field in the manifest you used?

Install the `crane` tool if you have not done so prior. The quickest method (Linux, Mac) is with Homebrew
via `brew install crane`.

https://github.com/google/go-containerregistry/tree/main/cmd/crane#installation

Use `crane` to verify the digest of the image.

```sh
crane digest ghcr.io/chipzoller/zulu:latest
```

Does the digest match the mutation?

Clean up the ClusterPolicy and Pod created in this lab when complete.
