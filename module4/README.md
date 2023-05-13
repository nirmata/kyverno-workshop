# Module 4: Supply Chain Security
Supply chain security refers to securing every component, process and practices that are involed in building and deploying of software. In this module, we will look at one major part of this chain which is signing of container images and verifying them before deployment.

## Task 1 (Image Signing and Verification)

For this task, we will use Sigstore's [cosign](https://docs.sigstore.dev/cosign/overview/) to generate a key pair and then sign an image using the private key that was generated.
### Generate key-pair
```sh
cosign generate-key-pair
```

### Sign container image
```sh
cosign sign --key cosign.key user/demo
```
The above command also pushes the signature as an OCI artifact along witht the image. You can go to your image registry to verify this.


Let us now look at the Kyverno policy used to verify image signatures. In the below policy, replace `imageReferences` field with your registry value and insert your public key that was generated in the above step in the placeholder (`<Your Public Key Here>`) provided in the `publicKeys` section.
```yaml
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
                      <Your Public Key Here>
                      -----END PUBLIC KEY-----

```

We will now try to run an unsigned image before applying the above policy.
```sh
k run unsigned --image=anushah/unsigned:v1.0.0 --dry-run=server
```
So there was no problem running. This tells us that it is possible now for __any__ image to run in our cluster. Let us apply the Kyverno policy
```sh
k apply -f check-image.yaml
```

Check if the policy is applied and ready.
```sh
k get polr -A
```

Let us try to run the same unsigned image now and see what happens this time.
```sh
k run unsigned --image=anushah/unsigned:v1.0.0 --dry-run=server
```

Finally let us run an image that is actually signed with the corresponding private key.
```sh
k run signed --image=anushah/signed:v1.0.0 --dry-run=server
```
Voila! It runs!

## Task 2
But, do __all__ signed images run irrespective of what private key they use?

Can you generate a different set of key pairs and sign an image with the newly created private key. Now try to run this image with the already existing policy. Does it work? Why?

