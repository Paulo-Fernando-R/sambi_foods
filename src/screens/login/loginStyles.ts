import { Dimensions, StyleSheet } from "react-native";
import appTexts from "../../styles/appText";
import appColors from "../../styles/appColors";

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        //height: Dimensions.get("window").height,

        justifyContent: "space-between",
    },
    logoBox: {
        alignItems: "center",
        gap: 12,
        paddingTop: Dimensions.get("screen").height / 4.7,
    },
    logo: {
        width: 150,
        height: 150,
    },
    subtitle: {
        ...appTexts.loginPageSubtitle,
        color: appColors.textMedium,
    },
    title: {
        ...appTexts.loginPageTitle,
        color: appColors.primaryLight,
    },
    buttonContainer: {
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 12,
    },
    buttonText: {
        ...appTexts.paragraphSmallRegular,
        color: appColors.textMedium,
    },
    button: {
        backgroundColor: appColors.primary,
        borderRadius: 20,
        width: "100%",
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
    },
    buttonTitle: {
        ...appTexts.titleSmallSemiBold,
        color: appColors.textLight,
    },
    bottom: {
        alignItems: "center",
        justifyContent: "center",
        gap: 12,

        backgroundColor: appColors.textMedium,
        height: 60,
    },
    bottomText: {
        ...appTexts.paragraphSmallRegular,
        color: appColors.textLight,
    },
});

export default styles;
