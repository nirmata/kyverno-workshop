# Module 5: Multitenancy
For shared Kubernetes clusters, multitenancy needs to be configured in order to ensure isolation between various tenants using different namespaces.


## Namespace as a Service
A typical Namespace as a Service workflow is as follows -
- A developer / team requests for a new namespace
- The platform /devops team now has to create a new namespace
- In addition to creating namespaces, proper guardrails needs to be in place so that the person or team using the namespace do not abuse it.
- Some of the guardrails include - adding ResourceQuota, NetworkPolicies, and setting CPU and memory limits on these namespaces.
- One way to automate could be a jenkins job that runs some scripts to create these resources and ensure safety
- Kyverno provides a more robust Kubernetes-native way to do the same workflow - all within YAML policies!

## Task
Now that we have some understanding of what Namespace as a Service is, let us assume the role of a platform admin and say, one of the developers requested for a new namespace with certain resource specific details. As a platofrm admin, how can we use Kyverno to do this?

### Hint
Use the `generate` rule type to generate resources on the fly.