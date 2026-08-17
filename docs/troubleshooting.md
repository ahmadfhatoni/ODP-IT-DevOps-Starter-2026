# Deployment Troubleshooting Guide

Use evidence, not guesses.

## Container/process state
```bash
docker ps
docker ps -a
```

## Logs
```bash
docker logs <container>
docker logs -f <container>
docker compose logs
```

## Verify
```bash
curl -i http://localhost:3000/health
docker inspect <container>
```

## Common Causes
- wrong port mapping;
- application listening on the wrong interface/port;
- missing environment variable;
- wrong API/database URL;
- incorrect image tag;
- container exited;
- dependency not ready/reachable;
- incorrect health endpoint.

## Container Networking Reminder
Within Docker Compose, `127.0.0.1` or `localhost` refers to the current container. To reach another service, use its Compose service name and internal service port.

## Diagnostic Flow
```text
Cannot access app
      ↓
Process/container running?
      ↓
Correct port mapping?
      ↓
Application started?
      ↓
Correct environment/config?
      ↓
Dependencies reachable?
      ↓
Health/functionality passes?
      ↓
Logs explain failure?
```

A release that deploys but fails verification should not be considered successful.
