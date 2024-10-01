import { Dimensions, StyleSheet } from "react-native";
import appTexts from "../../styles/appText";
import appColors from "../../styles/appColors";

const styles = StyleSheet.create({
    cookContainer: {
        paddingTop: 48,
        paddingHorizontal: 20,
        gap: 30,
        justifyContent: "flex-start",
        overflow: "visible",
    },

    ingredients: {
        gap: 10,
    },
    ingredientItem: {
        width: 80,
        height: 120,
        backgroundColor: appColors.primaryLight,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        paddingHorizontal: 8,
        paddingVertical: 12,
    },
    image: {
        width: "100%",
        aspectRatio: "1/1",
    },

    ingredientItemText1: {
        ...appTexts.paragraphSmallRegular,
        color: appColors.textLight,
        textAlign: "center",
    },

    ingredientItemText2: {
        ...appTexts.paragraphExtraSmallRegular,
        color: appColors.textMediumLight,
        textAlign: "center",
    },
    webViweWrapper: {
        width: "100%",
        height: 200, //Dimensions.get('window').height / 4.2,
        borderRadius: 12,
        overflow: "hidden",
    },

    title: {
        ...appTexts.titleMediumSemiBold,
        color: appColors.primary,
    },
    webView: {
        flex: 1,
    },

    talkList: {
        gap: 10,
        //paddingBottom: 200
        paddingBottom: 50,
    },

    talkItem: {
        backgroundColor: appColors.bgIcon,
        borderRadius: 20,
        padding: 12,
        alignItems: "flex-end",
        gap: 12,
    },

    talkText: {
        ...appTexts.paragraphSmallRegular,
        color: appColors.textMedium,
        width: "100%",
        textAlign: "left",
    },
    talkButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: appColors.primaryLight,
        maxWidth: 90,
        borderRadius: 30,
    },

    talkButtonText: {
        ...appTexts.paragraphSmallRegular,
        color: appColors.textLight,
    },
});

export default styles;
