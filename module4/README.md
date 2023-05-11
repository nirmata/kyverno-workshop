# Supply chain security

## Image signing and verification
### Generate key-pair
```sh

```

### Sign container image
```sh

```

Let us now look at the Kyverno policy used to verify image signatures.
```sh
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: check-image
spec:
  validationFailureAction: Audit
  background: false
  webhookTimeoutSeconds: 30
  failurePolicy: Fail
  rules:
    - name: check-image
      match:
        any:
          - resources:
              kinds:
                - Pod
                - Deployment
      verifyImages:
        - imageReferences:
            - "docker.io/anushah/*"
          attestors:
            - count: 1
              entries:
                - keys:
                    publicKeys: |-
                      -----BEGIN PUBLIC KEY-----
                      Your Public Key Here
                      -----END PUBLIC KEY-----

```

We will now try to run an unsigned image before applying the above policy.
```sh
kubectl run unsigned --image=anushah/unsigned:v1.0.0 --dry-run=server
```
So there was no problem running. This tells us that it is possible now for __any__ image to run in our cluster. Let us apply the Kyverno policy
```sh
kubectl apply -f check-image.yaml
```

Check if the policy is applied and ready.
```sh
kubectl get polr -A
```

Let us try to run the same unsigned image now and see what happens this time.
```sh
kubectl run unsigned --image=anushah/unsigned:v1.0.0 --dry-run=server
```

Finally let us run an image that is actually signed with the corresponding private key.
```sh
kubectl run signed --image=anushah/signed:v1.0.0 --dry-run=server
```
Voila! It runs!

##TODO make the below as a task
But, do __all__ signed images run irrespective of what private key they use?

