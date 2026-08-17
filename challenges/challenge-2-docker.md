# Challenge 2 — Container Runs, App Is Unreachable

`docker ps` shows the container is running, but the browser cannot access the application.

## Investigate
- application listening port;
- Dockerfile port;
- host/container port mapping;
- startup logs.

```bash
docker ps
docker logs <container>
docker inspect <container>
curl -i http://localhost:<port>/health
```

Correct the deployment configuration and verify the application.
