#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
APP="$ROOT/apps/frontend"
echo "[frontend-ci] app=$APP"

if [[ -f "$APP/package.json" ]]; then
  cd "$APP"
  if [[ -f package-lock.json ]]; then npm ci; else npm install; fi
  npm test --if-present
  npm run lint --if-present
  npm run build --if-present
elif [[ -f "$APP/tests/contract.test.mjs" ]]; then
  node --test "$APP/tests/contract.test.mjs"
  node --check "$APP/src/app.js"
elif [[ -f "$APP/Dockerfile" ]]; then
  echo "No source-level CI command detected; Docker image will be validated by the workflow/container build step."
else
  echo "No supported frontend build detected. Expected package.json, fallback tests, or Dockerfile." >&2
  exit 2
fi
