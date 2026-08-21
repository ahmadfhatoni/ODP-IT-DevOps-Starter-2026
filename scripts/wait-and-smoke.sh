#!/usr/bin/env bash
set -euo pipefail
BASE="${BASE_URL:-http://localhost:8080}"
for i in {1..40}; do
  if curl -fsS "$BASE/api/v1/health" >/dev/null 2>&1; then
    echo "Backend ready after attempt $i"
    exec "$(dirname "$0")/smoke-backend.sh"
  fi
  sleep 3
done
echo "Backend did not become ready" >&2
exit 1
