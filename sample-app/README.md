# Banking DevOps Demo App

Minimal dependency-free Node.js application used by the facilitator to demonstrate CI, Docker, health checks, logs, and deployment.

All banking data is fictional demo data.

## Run Locally
```bash
npm ci
npm test
npm run build
npm start
```

Endpoints:
- http://localhost:3000/
- http://localhost:3000/health
- http://localhost:3000/api/accounts
- http://localhost:3000/api/transactions

## Docker
```bash
docker build -t banking-devops-demo:v1 .
docker run -d --name banking-devops-demo -p 3000:3000 banking-devops-demo:v1
curl http://localhost:3000/health
docker logs banking-devops-demo
```

## Compose
```bash
docker compose up -d --build
docker compose ps
curl http://localhost:3000/health
docker compose logs
docker compose down
```
