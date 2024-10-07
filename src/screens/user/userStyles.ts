import { Button, StyleSheet } from "react-native";
import appTexts from "../../styles/appText";
import appColors from "../../styles/appColors";

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        paddingTop: 48,
        paddingHorizontal: 20,
        paddingBottom:20,
        gap: 30,
    },

    title: {
        ...appTexts.titleLargeMedium,
        color: appColors.textDark,
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 100,
    },
    userInfo: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    name: {
        gap: 4,
    },
    nameText: {
        ...appTexts.titleSmallSemiBold,
        color: appColors.textDark,
    },
    emailText: {
        ...appTexts.paragraphSmallRegular,
        color: appColors.textMedium,
    },
    Button: {
        backgroundColor: appColors.textMedium,
        borderRadius: 30,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    bttonText: {
        ...appTexts.titleSmallSemiBold,
        color: appColors.textLight,
    },
    bodyBox: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
    icon: {
        height: 90,
        width: 90,
    },
    iconText:{
        ...appTexts.titleMediumSemiBold,
        color: appColors.primary
    },
    linkBox:{
        gap: 8,
        alignItems: 'center'
    },

    linkText:{
        ...appTexts.paragraphSmallRegular,
        color: appColors.textMedium
    }
});

export default styles;
