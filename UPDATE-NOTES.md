# Update Notes — Shared JakOne Example

This revision aligns Day 7 with the Backend/Database module example.

## Changed

- Generic banking demo replaced with a JakOne account-service fallback mock.
- Endpoint examples now follow:
  - create account;
  - get single account;
  - transact (deposit/withdraw);
  - get mutations.
- `/health` retained as the Day 7 DevOps-specific runtime verification endpoint.
- Workshop flow now verifies both runtime health and banking business functions.
- Group checklist now includes API smoke testing.
- Added `docs/shared-application.md`.
- Added `docs/api-smoke-test.md`.

## Important Boundary

The Backend module owns the final API/business contract. Day 7 consumes that implementation. If endpoint payloads change before the workshop, update the smoke-test commands rather than redesigning the API inside the DevOps module.
