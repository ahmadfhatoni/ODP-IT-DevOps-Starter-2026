# Shared JakOne Application Contract

Day 7 uses the same application domain as the Backend/Database and Frontend modules.

## Core Functions

1. Create account
2. Get single account
3. Deposit / withdraw
4. Get mutations

## Endpoint Map

```text
POST /api/v1/accounts
GET  /api/v1/accounts/{accountNumber}
POST /api/v1/accounts/{accountNumber}/transact
GET  /api/v1/accounts/{accountNumber}/mutations
GET  /api/v1/health                         # Day 7 verification endpoint
```

## Account Model Used for DevOps Examples

The shared backend schema contains the concepts below:

```text
Account
├── id
├── accountNumber
├── customerNik
├── customerName
├── balance
└── createdAt
```

## Mutation Model Used for DevOps Examples

```text
Mutation
├── id
├── accountNumber
├── transactionType
├── channel
├── amount
├── resultingBalance
└── createdAt
```

Typical transaction types:

```text
DEPOSIT
WITHDRAWAL
```

Typical channels used by the shared example include:

```text
CASH
TRANSFER
QRIS
```

## DevOps Interpretation

The API contract is **input to the Day 7 session**, not something participants should redesign.

Day 7 asks:

```text
Can we build it?
Can we test it?
Can we package it?
Can we deploy it?
Can we prove it is healthy?
Can we prove the banking functions still work?
Can we diagnose it when they do not?
```
