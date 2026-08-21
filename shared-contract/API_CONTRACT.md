# JakOne Shared API Contract Used by the Day 7 Fallbacks

Base URL on MacBook: `http://localhost:8080`

## Health

`GET /api/v1/health`

## Create account

`POST /api/v1/accounts`

```json
{
  "customerNik": "3171012345678901",
  "customerName": "ODP Demo User",
  "initialBalance": 500000
}
```

Rules used by the current backend:

- NIK: exactly 16 characters.
- Customer name: 3–100 characters.
- Initial balance: minimum 50,000.

## Get one account

`GET /api/v1/accounts/{accountNumber}`

## Deposit / withdrawal

`POST /api/v1/accounts/{accountNumber}/transact`

```json
{
  "type": "DEPOSIT",
  "channel": "TRANSFER",
  "amount": 250000
}
```

- `type`: `DEPOSIT` or `WITHDRAWAL`.
- `channel`: `CASH`, `TRANSFER`, or `QRIS`.
- amount: minimum 10,000.

## Mutation history

`GET /api/v1/accounts/{accountNumber}/mutations`

## Seed account

The fallback DB schema seeds `DKI-1029384` with an initial balance of 500,000 for predictable class demos.
