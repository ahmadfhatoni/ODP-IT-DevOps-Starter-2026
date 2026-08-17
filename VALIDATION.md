# Package Validation

The included dependency-free Node.js sample application was validated in the generation environment:

- `node --test` — PASS
- `node scripts/build.js` — PASS

Docker runtime execution was not performed in the generation environment; Dockerfile and Compose files are provided for workshop use and should be smoke-tested on the facilitator laptop before the session.

The repository-level GitHub Actions workflow is configured to test and build `sample-app/` on pushes to `main` and on pull requests.
