# Module 7: Kyverno CLI

In this lab, you will get hands-on familiarity with the Kyverno CLI by using
the two main commands: `apply` and `test`.

For this lab, you will require the Kyverno CLI. The two quickest ways to download are
via `brew` or `krew`. This lab will assume installation has been completed via `krew`
which installs the Kyverno CLI as a plug-in to `kubectl` hence all commands will be prefaced
with the alias `k` for `kubectl`. To install with `krew`, you must have `krew` installed. See
instructions here: https://krew.sigs.k8s.io/docs/user-guide/setup/install/

**NOTE**: `krew` may also be installed by `brew`, however keep in mind that if you choose this installation path,
you must use `brew` to upgrade `krew` in the future. `krew`'s internal update ability will not function if it was
installed with `brew`.

Kyverno CLI installation with `brew`:

```sh
brew install kyverno
```

Kyverno CLI installation with `krew`:

```sh
k krew install kyverno
```

Verify that you can successfully launch the CLI.

Installed with `brew`:

```sh
kyverno version
```

Installed with `krew`:

```sh
k kyverno version
```

## Task 1

Experiment with the `apply` command by first applying the `pod.yaml` Pod manifest to the
ClusterPolicy manifest `apply-add-labels.yaml`. This is a mutation rule and when a matching
resource is passed to the `apply` command should produce the final mutation from Kyverno.

```sh
k kyverno apply apply-add-labels.yaml -r pod.yaml
```

Look at the last line printed in the terminal. Was it scored as a `pass`?

Inspect the output. How was this mutated?

Re-run the same command, but additionally pass the `sa.yaml` manifest.

```sh
k kyverno apply apply-add-labels.yaml -r pod.yaml -r sa.yaml
```

What was the result this time? Determine why this is different from the previous run.


----------------------------------------------------------------------------------------------


## Task 2

In this task, you will use the `test` command to fix and extend an existing test case for a policy
which you have modified for your organization from the Pod Security Standards controls. This
modification is necessary in order to work in one of your environments where you use a CNI plug-in
which requires use of a hostPort.

Start by running the `kyverno test` command and inspect the current results.

```sh
k kyverno test .
```

Determine why there is a test failure and fix it so it scores as a `Pass`.

**NOTE**: Do not change the `kyverno-test.yaml` test manifest at this point.

Once all tests are passing, extend these tests to add a resource
which should be skipped. For this, you will need to modify both `kyverno-test.yaml`
as well as `resource.yaml` to add a new test case. The result you wish to declare
in the test manifest is `skip`. You must inspect the ClusterPolicy to determine
how to produce such a result.

**HINT**: The results table displayed at the end of a `kyverno test` run will show the result
as `Fail` if the actual result of the test does not match what is specified in `kyverno-test.yaml`.
If you need troubleshooting help as to why the CLI may be scoring a resource the way it is,
pass the `-v=4` flag during a run to get more verbose output.

At the conclusion, you should have three successful tests, one for each result of `pass`, `fail`, and `skip`.

There is no clean up required for this lab.
