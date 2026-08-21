#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
APP="$ROOT/apps/mobile"
cd "$APP"

if [[ -f gradlew ]]; then
  chmod +x gradlew
  ./gradlew --no-daemon test lint assembleDebug
elif command -v gradle >/dev/null 2>&1; then
  gradle --no-daemon test lint assembleDebug
else
  echo "Gradle is not installed and this fallback intentionally does not bundle a Gradle wrapper JAR." >&2
  echo "Use Android Studio, install Gradle, or run the provided GitHub Actions workflow." >&2
  exit 2
fi
