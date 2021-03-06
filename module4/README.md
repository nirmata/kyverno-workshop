# Module 4: Mutation

Your company is running Kubernetes in AWS and wants to apply some governance
with respect to Services in order to guarantee desired behavior for NLBs.
Specifically, they want to ensure that all Services result in an NLB which
is accessible from the Internet while still allowing developers to create internal Services
as necessary.

## Task 1

Modify the `aws-service.yaml` ClusterPolicy manifest so that it adds the annotation
with key `service.beta.kubernetes.io/aws-load-balancer-scheme` and value `internet-facing`
to Services but only if the given key does not exist. Use the Service resource manifest `service.yaml`
to test your policy.

**NOTE**: Do not change the patch type in the ClusterPolicy.

**HINT**: There is an anchor specific to mutate rules which works well in these cases.

----------------------------------------------------------------------------------------------


As part of a new initiative to increase security in your on-premises Kubernetes
environment, you, as a lead for your QA-2 group, have been tasked
with making sure Pods do not run as root. Rather than blocking
those which do, you decide you would like this to be set automatically
so QA engineers do not have to go back and modify their manifests.


## Task 2


Modify the `qa-runasnonroot.yaml` Policy manifest so it sets the `runAsNonRoot`
field in a Pod `spec.securityContext` to `true`. Use the `pod.yaml` Pod resource
manifest to prove your policy works as expected.

**NOTE**: Do not change the patch type in the Policy.

**REMINDER**: This is a Policy (Namespaced) and you may need to create the appropriate Namespace first.

**HINT**: The most common operations for JSON patches are `add`, `replace`, and `remove`.

Once complete, clean up the policies and resources from this lab.
