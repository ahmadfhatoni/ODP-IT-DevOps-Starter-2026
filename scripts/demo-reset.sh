#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
docker compose -f "$ROOT/compose/docker-compose.full-demo.yml" down -v --remove-orphans
