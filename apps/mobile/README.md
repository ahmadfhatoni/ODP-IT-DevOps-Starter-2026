# Fallback Android/Kotlin App

Minimal native Android fallback for the mobile CI/CD demonstration.

It intentionally uses only Android platform networking APIs so the app logic stays small. The build itself still uses the Android Gradle Plugin and Kotlin plugin.

Default API URL for Android Emulator: `http://10.0.2.2:8080`.

Override at build time:

```bash
gradle :app:assembleDebug -PAPI_BASE_URL=http://192.168.1.10:8080
```

For a physical device, replace the IP with the MacBook's reachable LAN address.

`usesCleartextTraffic=true` is included only for the local workshop HTTP demo. A production mobile app should use HTTPS and a proper network security policy.
