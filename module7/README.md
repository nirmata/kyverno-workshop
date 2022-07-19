# Module 7: Kyverno CLI

In this lab, you will get hands-on familiarity with the Kyverno CLI by using
the two main commands: `apply` and `test`.

For this lab, you will require the Kyverno CLI. The two quickest ways to download are
via `brew` or `krew`. This lab will assume installation has been completed via `krew`
which installs the Kyverno CLI as a plug-in to `kubectl` hence all commands will be prefaced
with the alias `k` for `kubectl`. To install with `krew`, you must have `krew` installed. See
instructions here: https://krew.sigs.k8s.io/docs/user-guide/setup/install/

Installation with `brew`:

```sh
brew install kyverno
```

Installation with `krew`:

```sh
k krew install kyverno
```

## Task 1

