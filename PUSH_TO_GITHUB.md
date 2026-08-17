# Push This Starter Kit to GitHub

Target repository:

`https://github.com/bagzcode/ODP-IT-DevOps-Starter-2026`

## On Your MacBook

```bash
git clone https://github.com/bagzcode/ODP-IT-DevOps-Starter-2026.git
cd ODP-IT-DevOps-Starter-2026
```

Copy the **contents inside** the downloaded `ODP-IT-DevOps-Starter-2026` folder into this cloned directory, replacing the starter README when prompted.

Then:

```bash
git status
git add .
git commit -m "feat: add Day 7 CI/CD and DevOps workshop starter kit"
git push origin main
```

## Verify on GitHub
Confirm these paths exist:
- `README.md`
- `REQUIREMENTS.md`
- `WORKSHOP.md`
- `GROUP-CHECKLIST.md`
- `.github/workflows/ci.yml`
- `sample-app/`
- `templates/`
- `docs/`
- `challenges/`
- `instructor/`

Open the **Actions** tab. The repository-level CI workflow tests the included sample application.

## Important
Do not add real Docker Hub tokens, passwords, or API keys to this downloaded package. Add secrets later in GitHub repository settings when needed for instructor demonstrations.
