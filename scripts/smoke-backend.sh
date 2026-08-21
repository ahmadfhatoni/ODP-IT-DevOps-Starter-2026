#!/usr/bin/env bash
set -euo pipefail
BASE="${BASE_URL:-http://localhost:8080}"

echo "[1/5] Health"
curl -fsS "$BASE/api/v1/health" | jq .

echo "[2/5] Seed account"
curl -fsS "$BASE/api/v1/accounts/DKI-1029384" | jq .

echo "[3/5] Deposit"
curl -fsS -X POST "$BASE/api/v1/accounts/DKI-1029384/transact" \
  -H 'Content-Type: application/json' \
  -d '{"type":"DEPOSIT","channel":"TRANSFER","amount":10000}' | jq .

echo "[4/5] Account after transaction"
curl -fsS "$BASE/api/v1/accounts/DKI-1029384" | jq .

echo "[5/5] Mutations"
curl -fsS "$BASE/api/v1/accounts/DKI-1029384/mutations" | jq .
