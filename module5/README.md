# Module 5: Generation


## Task 1

You are on an SRE team for a startup company which sells Kubernetes-as-a-Service to its customers.
The internal project name for this offering is "Gemini". In this particular cluster, you provision a new Namespace per customer but always
with a set number of resources which can be consumed in that Namespace because the customer plans
sold are of currently only one size. Rather than manually setting these resource restrictions, you
decide to use Kyverno to automate the configuration of these Namespaces so customers cannot
use more resources than you allocate.

Modify the ClusterPolicy resource manifest `gemini-ns-policy.yaml` so that whenever a new Namespace
is created which begins with the string `gemini-`, a new ResourceQuota is created in that Namespace.
The contents of the ResourceQuota should be defined in the policy directly, but you want to re-use
the values of the ones you are creating by hand today reflected in `resourcequota.yaml`. After crafting
your ClusterPolicy, test it to ensure it works and a new ResourceQuota is generated.

**NOTE**: You may not hard code the value of the `namespace` field under the `generate` object. It must be dynamic.
**TIP**: If your attempts to generate the target resource fail, inspect the related UpdateRequest with `k get ur -A`.
To try again with the same name, delete the UpdateRequest which failed.

Once you have verified your policy is effective, clean up the resources created in this lab.