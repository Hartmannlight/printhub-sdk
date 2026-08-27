# @printhub/sdk

TypeScript client for the versioned PrintHub OpenAPI contract. The package remains a private workspace artifact; production consumers build it from the same synchronized release tag.

Run `npm ci && npm run ci` after every PrintHub contract update.


## Automated maintenance and releases

No standalone container or registry release. CI builds the architecture-independent SDK on Node 22 and 24. Studio consumes an exact SDK commit recorded in .github/sdk-revision and updated by Renovate.

See [policy](docs/SECURITY_RELEASE_POLICY.md), [required owner setup](docs/MANUAL_GITHUB_SETUP.md) and [rollback](docs/ROLLBACK.md).
Renovate auto-merge remains blocked until protected-branch checks are verified. No deployment automation is installed.
