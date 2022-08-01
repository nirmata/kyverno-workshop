## Task 1

Only images from the registry `ghcr.io` and the `chipzoller/zulu` repository will be validated by Kyverno as a result of this policy.

Once the Pod has been created successfully, the modified, replaced ClusterPolicy may look like the following.

```yaml
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: keyless-sig-verification
spec:
  validationFailureAction: enforce
  webhookTimeoutSeconds: 30
  rules:
    - name: check-zulu-keyless
      match:
        any:
        - resources:
            kinds:
              - Pod
      verifyImages:
      - imageReferences:
        - "ghcr.io/chipzoller/zulu:*"
        attestors:
        - entries:
          - keyless:
              subject: "https://github.com/chipzoller/zulu/.github/workflows/slsa-generic-keyless.yaml@refs/heads/main"
              issuer: "https://token.actions.githubusercontent.org"
```

Replacing the existing policy with the above and re-submitting the same Pod should now result in failure because the `issuer` field in the policy does not match the actual issuer which signed the image.

## Task 2

Upon inspection of the Pod, you should find that the `image` field has been changed so that the tag has been replaced with the SHA256 digest of the image. For example, the current value of the `image` field may look something like `ghcr.io/chipzoller/zulu:latest@sha256:f6ca0ebd57ceb66393d92ae5d9d93e6de845ef11f54484211ecc4c1ec5a98405`.

Upon running the command `crane digest ghcr.io/chipzoller/zulu:latest` you should see returned `sha256:f6ca0ebd57ceb66393d92ae5d9d93e6de845ef11f54484211ecc4c1ec5a98405` which should match the mutated value of `image`.
