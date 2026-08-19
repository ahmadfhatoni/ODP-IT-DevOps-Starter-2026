# Day 7 Workshop Guide
## Integration & DevOps — Shared JakOne Example

## Mission

Take the **same JakOne project** developed in the Backend/Database and Frontend modules and make it repeatably buildable, testable, deployable, and verifiable.

---

## Activity 1 — Establish the Deployment Baseline

Record:

```text
Project name:
Backend technology:
Frontend technology:
Database:
Repository:
Backend build command:
Backend test/check command:
Frontend build command (if applicable):
Application ports:
Environment variables:
Deployment artifact:
Target environment:
```

Confirm the shared functions are present:

- create account
- get account
- deposit / withdraw
- get mutations

**Checkpoint 1:** project works before DevOps changes.

---

## Activity 2 — Map the Delivery Pipeline

Design:

```text
Push
 ↓
Build
 ↓
Automated Checks
 ↓
Package
 ↓
Deploy
 ↓
Runtime Health
 ↓
API Smoke Test
```

Define which failures must stop promotion.

---

## Activity 3 — Implement CI

Create or adapt:

```text
.github/workflows/ci.yml
```

Minimum:

```text
Checkout
  ↓
Setup runtime
  ↓
Restore/install dependencies
  ↓
Test / validation
  ↓
Build
```

**Checkpoint 2:** successful GitHub Actions run.

---

## Activity 4 — Experience a CI Failure

Introduce a safe, intentional build/test failure.

Observe that CI blocks progression.

Fix the issue and obtain a green pipeline.

**Checkpoint 3:** group can explain cause and resolution.

---

## Activity 5 — Containerize the Shared Application

For backend/web components where Docker is appropriate:

```text
Backend
  ↓
Dockerfile
  ↓
Docker Image
```

If the group's backend from the earlier module already contains a Dockerfile, **review and improve it rather than replacing it unnecessarily**.

Build and run:

```bash
docker build -t jakone-backend:day7 .
docker run ...
docker ps
docker logs <container>
```

---

## Activity 6 — Environment & Configuration

Identify configuration that must not be hard-coded:

```text
APP_ENV
SERVER_PORT
DATABASE_HOST
DATABASE_PORT
DATABASE_NAME
DATABASE_USER
DATABASE_PASSWORD
FRONTEND/API_BASE_URL
```

Keep real secrets out of Git.

Document safe placeholders in `.env.example`.

---

## Activity 7 — Compose the Runtime

For the shared backend/database example:

```text
Docker Compose
├── backend
└── postgres
```

Where the frontend is containerized:

```text
Docker Compose
├── frontend
├── backend
└── postgres
```

Important: within a Compose network, a service should connect to another service using the service name rather than assuming `localhost`.

**Checkpoint 4:** application and database start consistently.

---

## Activity 8 — Extend CI Toward Delivery

After CI passes:

```text
CI
 ↓
Docker Build / Artifact Build
 ↓
Registry / Distribution
 ↓
Deploy
```

Use GitHub Secrets/Variables for sensitive or environment-specific pipeline configuration.

---

## Activity 9 — Post-Deployment Verification

Do not stop after `docker ps`.

Perform:

### Runtime check

```text
GET /health
```

### Business smoke test

```text
Create Account
      ↓
Get Account
      ↓
Deposit / Withdraw
      ↓
Get Mutations
```

Use [docs/api-smoke-test.md](docs/api-smoke-test.md).

**Checkpoint 5:** deployed service is both runtime-healthy and functionally healthy.

---

## Activity 10 — Troubleshoot

Investigate one controlled failure using:

```bash
docker ps
docker ps -a
docker logs <container>
docker compose logs
docker inspect <container>
curl -i <endpoint>
```

Suggested failures:

- wrong published port;
- backend cannot reach database;
- missing environment variable;
- incorrect image tag;
- health endpoint wrong;
- runtime healthy but banking smoke test fails.

---

## Activity 11 — Demo Freeze

Stop adding features before the final demo.

Stabilize the release and collect evidence.

---

## Final Group Demo

Each group shows:

1. shared JakOne prototype;
2. repository;
3. successful CI run;
4. deployable artifact/container;
5. running deployment;
6. `/health`;
7. one business API smoke-test path;
8. logs/troubleshooting evidence; and
9. one issue encountered and how it was resolved.
