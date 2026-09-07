#!/usr/bin/env bash
set -euo pipefail

BASE="${BASE_URL:-http://localhost:8080}"

pretty_json() {
  if command -v jq >/dev/null 2>&1; then
    jq .
  else
    cat
    echo
  fi
}

echo "[1/5] Health"
curl -fsS "$BASE/api/v1/health" | pretty_json

echo "[2/5] Seed account"
curl -fsS "$BASE/api/v1/accounts/DKI-1029384" | pretty_json

echo "[3/5] Deposit"
curl -fsS -X POST "$BASE/api/v1/accounts/DKI-1029384/transact" \
  -H 'Content-Type: application/json' \
  -d '{"type":"DEPOSIT","channel":"TRANSFER","amount":10000}' \
  | pretty_json

echo "[4/5] Account after transaction"
curl -fsS "$BASE/api/v1/accounts/DKI-1029384" | pretty_json

echo "[5/5] Mutations"
curl -fsS "$BASE/api/v1/accounts/DKI-1029384/mutations" | pretty_json
