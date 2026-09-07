# JakOne Account Service — DevOps Fallback Mock

This is **not a replacement for the Backend module implementation**.

It is a dependency-free fallback/mock for the facilitator to demonstrate Day 7 DevOps mechanics using the same endpoint names as the shared JakOne example.

## Functions

```text
POST /api/v1/accounts
GET  /api/v1/accounts/{accountNumber}
POST /api/v1/accounts/{accountNumber}/transact
GET  /api/v1/accounts/{accountNumber}/mutations
GET  /api/v1/health
```

## Local Run

```bash
npm ci
npm test
npm run build
npm start
```

Default port: `8080`.

## Docker

```bash
docker build -t jakone-devops-mock:day7 .
docker run -d --name jakone-devops-mock -p 8080:8080 jakone-devops-mock:day7
curl http://localhost:8080/api/v1/health
docker logs jakone-devops-mock
```

## Example Create Account

```bash
curl -X POST http://localhost:8080/api/v1/accounts   -H 'Content-Type: application/json'   -d '{"customerNik":"3171012345670099","customerName":"ODP Demo User","initialBalance":750000}'
```

Use the returned account number for the remaining calls.

## Important

During the real workshop, prefer the group's actual backend from the earlier module. Use this mock only if the shared backend is temporarily unavailable or for a fast instructor demonstration.
