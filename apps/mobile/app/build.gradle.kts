plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

android {
    namespace = "com.bankdki.jakonefallback"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.bankdki.jakonefallback"
        minSdk = 26
        targetSdk = 35
        versionCode = 1
        versionName = "1.0"

        val apiBaseUrl = providers.gradleProperty("API_BASE_URL")
            .orElse("http://10.0.2.2:8080")
            .get()
        buildConfigField("String", "API_BASE_URL", "\"$apiBaseUrl\"")
    }

    buildFeatures { buildConfig = true }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions { jvmTarget = "17" }
}

dependencies {
    testImplementation("junit:junit:4.13.2")
}
