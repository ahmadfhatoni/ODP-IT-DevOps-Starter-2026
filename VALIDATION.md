# Package Validation

The workshop fallback environment has been validated for the Bank Jakarta ODP IT 2026 Day 7 Integration & DevOps session.

## Sample Application

Validated successfully:

- `node --test` — PASS
- `node scripts/build.js` — PASS

## Full-Stack Docker Validation

Validated using:

- PostgreSQL 16 Alpine
- Spring Boot backend
- Fallback frontend
- Docker Compose
- Frozen backend image: `bagzmate/jakone-be:day7-2026-09-09`

The following checks passed:

- PostgreSQL reaches healthy state
- Backend starts on port 8080
- Frontend starts on port 3000
- `GET /api/v1/health` returns service status `UP`
- Seed account can be retrieved
- Deposit transaction succeeds
- Updated account balance can be retrieved
- Mutation history can be retrieved
- Fresh database initialization produces deterministic seed state
- Smoke test succeeds with `jq`
- Smoke test also succeeds without `jq`

## Workshop Runtime Verification

The canonical backend runtime verification endpoint is:

`GET /api/v1/health`

The fallback stack is intended as a known-good recovery environment if a group's ongoing project cannot be used during the workshop.

## CI/CD

Repository workflows provide:

- frontend CI
- Android mobile CI
- full-stack integration rehearsal

The workshop uses a versioned backend image rather than relying on the mutable `latest` tag.

## Final Pre-Class Check

Before the session, perform one clean-clone rehearsal and verify:

1. repository clone
2. Docker image pull
3. Docker Compose startup
4. PostgreSQL health
5. backend health
6. business smoke test
7. frontend access
8. GitHub Actions execution
9. intentional failure and recovery
