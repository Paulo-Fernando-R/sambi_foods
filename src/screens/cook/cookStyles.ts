import { Dimensions, StyleSheet } from "react-native";
import appTexts from "../../styles/appText";
import appColors from "../../styles/appColors";

const styles = StyleSheet.create({
    cookContainer: {
        paddingTop: 48,
        gap: 30,
        justifyContent: "flex-start",
        overflow: "visible",
    },

    ingredients: {
        gap: 10,
        paddingHorizontal: 20,
    },
    ingredientItem: {
        width: 90,
        height: 120,
        backgroundColor: appColors.primaryLight,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        paddingHorizontal: 8,
        paddingVertical: 12,
    },
    image: {
        width: 50,
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
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 20,
    },

    titleWrapper:{
        paddingHorizontal: 20
    },

    title: {
        ...appTexts.titleMediumSemiBold,
        color: appColors.primary,
        paddingHorizontal: 20
    },
    webView: {
        flex: 1,
    },

    talkList: {
        gap: 10,
        paddingHorizontal: 20,
        paddingBottom: 70,
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
