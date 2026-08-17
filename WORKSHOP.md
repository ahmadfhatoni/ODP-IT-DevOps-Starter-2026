# Day 7 Workshop Guide

## Mission
Apply CI/CD and deployment practices directly to your group's existing project and finish the day with a deployed, verified, demo-ready prototype.

## Activity 1 — Baseline Your Project

Record:
```text
Project name:
Project type: web / backend / full-stack / mobile / other
Technology stack:
Repository URL:
Build command:
Test/check command:
Run command:
Application port:
Deployment artifact:
Environment variables:
Target deployment environment:
```

Create a safe working branch if your team workflow allows it:
```bash
git checkout -b day7-devops
git status
git add .
git commit -m "chore: Day 7 deployment baseline"
git push -u origin day7-devops
```

**Checkpoint 1:** application still runs locally.

## Activity 2 — Design Your CI/CD Flow
Draw the minimum delivery path:

```text
Code → Build → Test/Check → Package → Deploy → Verify
```

Use [docs/cicd-overview.md](docs/cicd-overview.md).

## Activity 3 — Implement Continuous Integration
Create `.github/workflows/ci.yml`.

Use [`templates/ci-node.yml`](templates/ci-node.yml), [`templates/ci-spring.yml`](templates/ci-spring.yml), or adapt the generic logic to your stack.

Minimum target:
```text
Push / Pull Request
        ↓
Checkout
        ↓
Setup Runtime
        ↓
Install/Restore
        ↓
Test / Check
        ↓
Build
        ↓
PASS / FAIL
```

**Checkpoint 2:** successful CI run visible in GitHub Actions.

## Activity 4 — Experience a CI Failure
Intentionally make a safe change that causes a build/test/check failure. Observe the failed job, fix it, push again, and obtain a green run.

**Checkpoint 3:** group can explain why CI failed and how it was fixed.

## Activity 5 — Prepare a Deployable Artifact

### Web / Backend / Full-Stack
Use:
- [`templates/Dockerfile.node`](templates/Dockerfile.node)
- [`templates/Dockerfile.spring`](templates/Dockerfile.spring)

Typical flow:
```bash
docker build -t group-project:v1 .
docker run -d --name group-project -p <host-port>:<app-port> group-project:v1
docker ps
docker logs group-project
```

### Mobile
Produce the platform-appropriate artifact, e.g. APK/AAB for Android. See [docs/mobile-cicd-example.md](docs/mobile-cicd-example.md).

**Checkpoint 4:** deployable artifact can be produced.

## Activity 6 — Environment & Configuration
Identify values that vary by environment, such as `APP_ENV`, `PORT`, `API_URL`, and `DATABASE_URL`.

Create `.env.example` as documentation. Do **not** commit real passwords, tokens, API keys, or production credentials.

## Activity 7 — Run with Docker Compose (Where Applicable)
Adapt [`templates/compose.yaml`](templates/compose.yaml).

```bash
docker compose up -d --build
docker compose ps
docker compose logs
docker compose down
```

**Checkpoint 5:** application starts repeatably from deployment configuration.

## Activity 8 — Publish the Artifact
For Docker-based projects:

```bash
docker login
docker tag group-project:v1 <username>/group-project:v1
docker push <username>/group-project:v1
docker pull <username>/group-project:v1
```

## Activity 9 — Extend CI Toward Delivery
Reference the instructor demonstration and [`instructor/solutions/docker-publish.yml`](instructor/solutions/docker-publish.yml).

```text
Push
 ↓
Build + Test
 ↓
Package
 ↓
Registry / Distribution
 ↓
Deploy
 ↓
Verify
```

Do not place passwords or tokens directly in workflow YAML.

## Activity 10 — Deploy & Verify Your Prototype
Verification may include:
- browser smoke test;
- API response;
- `/health` endpoint;
- container/process status;
- logs;
- mobile build installation/test.

```text
Build ✓
Test ✓
Deploy ✓
Health/Functional Verification ✗

= release is NOT considered successful
```

## Activity 11 — Troubleshoot
Use [docs/troubleshooting.md](docs/troubleshooting.md) and complete at least one challenge in [`challenges/`](challenges/).

Your group should answer:
1. What failed?
2. Where did you look for evidence?
3. What was the root cause?
4. What change fixed it?
5. How would you prevent recurrence?

## Activity 12 — Demo Freeze & Final Demonstration
Stop adding features before the demo. Stabilize the deployed version.

Each group demonstrates:
1. project prototype;
2. GitHub repository;
3. successful CI run;
4. deployable artifact;
5. running/deployed prototype;
6. verification evidence;
7. logs/operational evidence; and
8. one deployment problem and its resolution.

Complete [GROUP-CHECKLIST.md](GROUP-CHECKLIST.md) before presenting.
