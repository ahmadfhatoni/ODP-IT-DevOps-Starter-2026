# CI/CD Overview

## Continuous Integration
Developers integrate code frequently and automated checks determine whether a change is safe to integrate.

```text
Commit → Build → Test/Check → Feedback
```

A failed build/test should normally stop the pipeline.

## Continuous Delivery
A validated artifact is kept in a deployable state. Production release can include an approval/control gate.

```text
CI → Artifact → Staging → Verify → Approval → Production
```

## Continuous Deployment
Validated changes can progress automatically into production when all defined controls pass.

```text
CI → Artifact → Automated Validation → Production
```

## Banking Context
Automation does not remove governance. A controlled delivery model can automate build, testing, security/quality checks, packaging, and staging while retaining an appropriate release approval before production.

## Pipeline Questions
1. What triggers the pipeline?
2. What must be built?
3. What checks must pass?
4. What artifact is produced?
5. Where is it stored/distributed?
6. Where is it deployed?
7. How is successful deployment verified?
8. What happens when verification fails?
