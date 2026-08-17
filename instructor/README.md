# Instructor Notes

The `sample-app/` is a demonstration and fallback environment. The participant's main hands-on target is the group's ongoing project.

## Suggested Demonstration Sequence
1. Run sample app locally.
2. Show successful CI.
3. Intentionally break a test and show CI stopping.
4. Restore the test.
5. Build the Docker image.
6. Run the container and verify `/health`.
7. Show logs.
8. Demonstrate Docker Hub publishing.
9. Demonstrate a controlled deployment failure.
10. Return participants to their own project.

## Safety
- Never commit real credentials.
- Use fictional data only.
- Do not require Docker if a project's artifact is natively different.
- Keep focus on repeatable delivery, verification, and troubleshooting.
