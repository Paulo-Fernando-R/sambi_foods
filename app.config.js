module.exports = {
    expo: {
        name: "sambi_foods",
        slug: "sambi_foods",
        version: "1.0.0",
        orientation: "portrait",
        icon: "./assets/icon.png",
        userInterfaceStyle: "light",
        splash: {
            image: "./assets/splash.png",
            resizeMode: "contain",
            backgroundColor: "#ffffff",
        },
        ios: {
            supportsTablet: true,
            bundleIdentifier: "com.nome123.sambi-foods",
        },
        android: {
            softwareKeyboardLayoutMode: "pan",
            adaptiveIcon: {
                foregroundImage: "./assets/adaptive-icon.png",
                backgroundColor: "#ffffff",
            },
            package: "com.nome123.sambi_foods",
            //"googleServicesFile": "./google-services.json"
            googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
        },
        web: {
            favicon: "./assets/favicon.png",
        },
        extra: {
            eas: {
                projectId: "5af6203c-b1cd-436d-8c69-066cc5ad286b",
            },
        },
        plugins: [
            "expo-secure-store",
            "@react-native-google-signin/google-signin",
            "@react-native-firebase/app",
            "@react-native-firebase/auth",
            "@react-native-firebase/crashlytics",
        ],
    },
};
