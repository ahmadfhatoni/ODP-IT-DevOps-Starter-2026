# JakOne Post-Deployment Smoke Test

A green deployment job does not automatically mean the release works.

Day 7 verifies two levels:

## 1. Infrastructure / Runtime Health

Example:

```bash
curl -i "$BASE_URL/api/v1/health"
```

Expected: a successful HTTP response indicating the service is running.

## 2. Business-Function Health

After deployment, verify the same functional path used by the shared application.

### A. Create Account

```bash
curl -i -X POST "$BASE_URL/api/v1/accounts"   -H "Content-Type: application/json"   -d '{
    "customerNik": "3171012345670099",
    "customerName": "ODP Demo User",
    "initialBalance": 750000
  }'
```

Capture the returned `accountNumber`.

### B. Get Account

```bash
curl -i "$BASE_URL/api/v1/accounts/$ACCOUNT_NUMBER"
```

Check that account identity and balance are returned.

### C. Deposit

Adapt the request body to the exact backend contract implemented by the Backend module.

Conceptually:

```json
{
  "transactionType": "DEPOSIT",
  "channel": "TRANSFER",
  "amount": 250000
}
```

### D. Withdraw

Conceptually:

```json
{
  "transactionType": "WITHDRAWAL",
  "channel": "CASH",
  "amount": 100000
}
```

### E. Get Mutations

```bash
curl -i "$BASE_URL/api/v1/accounts/$ACCOUNT_NUMBER/mutations"
```

Confirm that the transaction ledger reflects the test operations.

## Release Decision

```text
Container running       ✓
/api/v1/health          ✓
Create account          ✓
Get account             ✓
Deposit / withdrawal    ✓
Mutation retrieval      ✓
--------------------------------
Release verification    PASS
```

If `/api/v1/health` passes but a core API scenario fails, treat the release as **functionally unhealthy** and investigate before promotion/demo.

> Note: request-field names for transaction operations should follow the final Backend module implementation. The DevOps module should consume that contract rather than redefine it.
