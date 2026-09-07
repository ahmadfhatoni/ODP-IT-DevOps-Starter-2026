# ODP IT Bank Jakarta 2026
## Day 7 — Integration & DevOps
### CI/CD, Docker & Application Deployment

This repository is the practical companion for **Day 7** of the ODP IT Bank Jakarta 2026 program.

## Shared 10-Day Application Example

Day 7 now follows the **same JakOne account-service example** used by the Backend/Database and Frontend modules.

Core business functions:

- Create account
- Get a single account
- Deposit / withdraw
- Get account mutations

Reference API shape:

```text
POST /api/v1/accounts
GET  /api/v1/accounts/{accountNumber}
POST /api/v1/accounts/{accountNumber}/transact
GET  /api/v1/accounts/{accountNumber}/mutations
```

For DevOps verification we add:

```text
GET /api/v1/health
```

The DevOps session does **not** redesign the backend. It takes the shared application produced in earlier modules and makes it **buildable, testable, packageable, deployable, and verifiable**.

## Today's Mission

```text
Existing JakOne Prototype
        ↓
Git Repository
        ↓
Continuous Integration
        ↓
Build + Automated Checks
        ↓
Deployable Artifact
        ↓
Container / Distribution
        ↓
Deployment
        ↓
Health + API Smoke Test
        ↓
Demo-Ready Prototype
```

## Start Here

1. Read [Participant Requirements](REQUIREMENTS.md).
2. Review [Shared Application Contract](docs/shared-application.md).
3. Open your group's ongoing project repository.
4. Follow the [Workshop Guide](WORKSHOP.md).
5. Use [`templates/`](templates/) where useful.
6. Run the [JakOne smoke-test guide](docs/api-smoke-test.md).
7. Complete the [Group Checklist](GROUP-CHECKLIST.md).
8. Demonstrate the deployed prototype at the end of the session.

## Learning Focus

- CI/CD and DevOps workflow
- Docker and deployment
- Environment/configuration management
- Deployment verification and troubleshooting
- Difference between infrastructure health and business-function health

## End-of-Day Output

Each group should demonstrate:

- a working CI pipeline;
- a deployable project artifact;
- appropriate environment/deployment configuration;
- a deployed and verified JakOne prototype;
- health and API-level smoke-test evidence; and
- basic logging/troubleshooting evidence.

## Source Alignment

The shared API examples and database concepts are aligned to Pak Susanto's Backend/Database module repository:

- Mock response examples: `susanto-hariyanto-SSG6/be`, branch/path `dev/05-validation/json`
- Proposed database structure: `dev/05-validation/jakone-db/init/01-schema.sql`

## Important Principle

**CI/CD is a software-delivery practice. Docker is one possible implementation technology within that practice.**

The included `sample-app/` is a **DevOps fallback/mock** that follows the shared endpoint names. The preferred workshop target remains the actual group project produced during the earlier modules.
