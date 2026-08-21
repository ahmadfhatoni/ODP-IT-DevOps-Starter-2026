# Instructor Demo Script — Fallback FE/Mobile

## Use in Session 2: Integration/Container Runtime (10–15 min)

1. Start standalone stack:
   `docker compose -f compose/docker-compose.full-demo.yml up -d --build`
2. Show `docker compose ... ps`.
3. Open `http://localhost:3000`.
4. Click Backend Health.
5. Get seed account `DKI-1029384`.
6. Deposit 50,000 and retrieve mutations.
7. Explain the Nginx reverse proxy: browser -> frontend -> `backend:8080`.

Teaching point: FE is not being taught; the fallback provides a realistic consumer so DevOps participants can verify integration.

## Use in Session 3: Frontend CI/CD comparison (5–8 min)

1. Open `.github/workflows/frontend-ci.yml`.
2. Show frontend source changes trigger test/build/container validation.
3. Compare backend artifact (Docker image) and frontend artifact/container.
4. If official frontend arrives, replace `apps/frontend` and keep the same CI concept.

## Use in Session 3: Mobile CI/CD extension (15–20 min)

1. Open `apps/mobile` and explain it is a deliberately small native Kotlin consumer.
2. Show local/CI build flow: test -> lint -> assembleDebug.
3. Trigger `Android Mobile CI Demo` manually in GitHub Actions.
4. Open the completed run and show the uploaded APK artifact.
5. Explain: Android produces APK/AAB, not a Docker image for device deployment.
6. Explain environment address: Android Emulator uses `10.0.2.2` to reach the MacBook host.
7. Do not perform Play Store publishing in class; discuss signing and approval gates conceptually.

## Backup rule

If the official FE/Mobile projects arrive shortly before class, keep these fallbacks untouched in a backup copy. Run the official app only after it passes the same contract/smoke checks.
