# Day 7 Pre-Class Requirements

Each group must bring the latest **working version of its ongoing project** from the previous workshop days.

## Laptop
- Minimum 8 GB RAM; 16 GB recommended
- 10–15 GB free storage
- Administrator/root access
- Stable internet connection

## Required Software
- Git
- Docker Desktop (Windows/macOS) or Docker Engine (Linux)
- Docker Compose (`docker compose`)
- Visual Studio Code or another preferred IDE
- Runtime/SDK required by the group's project
- Modern browser
- Terminal / PowerShell / WSL2 as applicable

For Node.js projects, install Node.js LTS + npm. For Java/Spring projects, have the project's required JDK and Maven/Gradle tooling available.

## Required Accounts
- GitHub account
- Access to the group's GitHub repository
- Docker Hub account
- At least one group member with permission to configure GitHub Actions and repository secrets/variables

## Verify Before Class
```bash
git --version
docker --version
docker compose version
docker run hello-world
```

For Node.js:
```bash
node --version
npm --version
```

For Java:
```bash
java --version
```

## Group Project Readiness
- [ ] Latest project is pushed to GitHub.
- [ ] All group members can access the repository.
- [ ] Application runs locally on at least one group member's laptop.
- [ ] Build command is known.
- [ ] Test/check command is known, if available.
- [ ] Run/start command is known.
- [ ] Application port is known, if applicable.
- [ ] Required environment variables are identified.
- [ ] Sensitive credentials are NOT committed to Git.

## You Do Not Need to Prepare Before Class
- A CI/CD workflow
- GitHub Actions YAML
- Dockerfile (if not already available)
- Docker Compose configuration
- Container-registry automation
- Production deployment automation

These are developed during Day 7.

##Notes

If ports 8080 or 3000 are already in use, change BACKEND_HOST_PORT or FRONTEND_HOST_PORT in .env. Do not stop unrelated applications unless you know they are safe to stop.
