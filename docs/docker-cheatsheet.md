# Docker Cheat Sheet

```bash
docker --version
docker compose version
docker run hello-world

docker build -t my-app:v1 .
docker images
docker run -d --name my-app -p 3000:3000 my-app:v1
docker ps
docker ps -a
docker logs my-app
docker logs -f my-app
docker inspect my-app

docker compose up -d --build
docker compose ps
docker compose logs
docker compose down

curl http://localhost:8080/api/v1/health
```

## Remember
- An **image** is the packaged template.
- A **container** is a running instance of an image.
- `EXPOSE` documents a container port; `-p host:container` publishes it.
- Inside a container, `localhost` refers to that container itself.
