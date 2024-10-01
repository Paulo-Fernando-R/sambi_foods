import { StyleSheet } from "react-native";
import appTexts from "../../styles/appText";
import appColors from "../../styles/appColors";

const styles = StyleSheet.create({
    container: { maxHeight: 120, minHeight: 120 },

    ingredients: {
        gap: 10,
        paddingHorizontal: 20,
        maxHeight: 120,
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
});

export default styles;
