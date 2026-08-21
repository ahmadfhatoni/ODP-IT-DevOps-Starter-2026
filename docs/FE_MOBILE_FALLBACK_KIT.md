# ODP IT Day 7 — Fallback Frontend & Mobile CI/CD Kit

Purpose: keep the Integration & DevOps session fully runnable even if the Frontend/Mobile facilitators have not delivered their final applications yet.

The kit is intentionally modular:

- `apps/frontend/` — replaceable frontend application (currently a zero-dependency Nginx web fallback).
- `apps/mobile/` — replaceable Android/Kotlin application (currently a minimal native fallback).
- `shared-contract/` — stable JakOne API contract and DB seed used by the Day 7 demo.
- `compose/` — standalone full-stack demo using the published backend image.
- `.github/workflows/` — CI examples for frontend, mobile, and an optional integration demo.
- `scripts/` — auto-detect CI helpers and smoke tests.
- `instructor/` — rehearsal/demo notes.

## Fastest demo

```bash
cp .env.example .env
docker compose -f compose/docker-compose.full-demo.yml up -d --build
bash scripts/wait-and-smoke.sh
```

Open:

- Web fallback: http://localhost:3000
- Backend: http://localhost:8080/api/v1/health

Seed account: `DKI-1029384`

## When the real Frontend/Mobile project arrives

Read `REPLACEMENT_GUIDE.md`. The design goal is to replace `apps/frontend/` and/or `apps/mobile/` while keeping the shared API contract, workshop flow, and most CI/CD demonstration material unchanged.
