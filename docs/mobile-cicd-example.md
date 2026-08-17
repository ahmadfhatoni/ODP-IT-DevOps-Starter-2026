# Mobile Native CI/CD Example

## Web / Backend
```text
Git Push → CI → Test + Build → Docker Image → Registry → Server → Health Check
```

## Android
```text
Git Push → CI → Test → Gradle Build → Sign → APK/AAB → Internal Testing/Distribution → Device
```

## iOS
```text
Git Push → CI → Test → Xcode Build → Sign → IPA → TestFlight/Distribution → Device
```

## Key Point
**CI/CD is the delivery practice. Docker is one packaging/deployment technology, not the native mobile-app deployment artifact.**
