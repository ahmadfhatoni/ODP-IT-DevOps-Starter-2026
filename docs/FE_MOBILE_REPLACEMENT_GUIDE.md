# Replacement Guide — When Facilitator Apps Arrive

## Keep these folders unchanged

- `shared-contract/`
- `scripts/`
- `instructor/`
- `.github/workflows/` (normally reusable; adjust only if the incoming project has unusual build commands)

## Replace Frontend

1. Back up or remove `apps/frontend/`.
2. Copy the facilitator's frontend project into `apps/frontend/`.
3. Run `bash scripts/frontend-ci.sh`.
4. If the real app has a Dockerfile, update the frontend service in `compose/docker-compose.full-demo.yml` only if its exposed port differs from 80.
5. Configure its API base URL to the JakOne backend. Inside Docker Compose, use `http://backend:8080`; from a browser, prefer the web server reverse proxy or `http://localhost:8080` if CORS is configured.

The CI helper auto-detects Node projects (`package.json`) and otherwise uses a Dockerfile/static validation fallback.

## Replace Mobile

1. Back up or remove `apps/mobile/`.
2. Copy the facilitator's Android project into `apps/mobile/`.
3. Run `bash scripts/mobile-ci.sh` after Android SDK/Gradle are available.
4. If the project has `gradlew`, the helper uses it automatically.
5. For Android Emulator, backend URL is normally `http://10.0.2.2:8080`.
6. For a physical device, use the MacBook LAN IP and ensure the device can reach it.

The mobile GitHub workflow uploads generated APK/AAB files as CI artifacts.

## Stable contract for Day 7

Do not redesign the Backend API during the DevOps session. The fallback apps consume:

- `GET /api/v1/health`
- `POST /api/v1/accounts`
- `GET /api/v1/accounts/{accountNumber}`
- `POST /api/v1/accounts/{accountNumber}/transact`
- `GET /api/v1/accounts/{accountNumber}/mutations`

If the Backend facilitator changes the contract later, update only `shared-contract/API_CONTRACT.md`, the fallback API calls, and smoke-test script.
