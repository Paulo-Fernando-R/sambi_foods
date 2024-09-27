import { Dimensions, StyleSheet } from "react-native";
import appTexts from "../../services/appText";
import appColors from "../../services/appColors";

const styles = StyleSheet.create({
    container: {
        gap: 12,
        paddingLeft: 20,
        height: 400
        //height: Dimensions.get("window").height / 2.3,
    },
    title: {
        ...appTexts.titleSmallSemiBold,
        color: appColors.primary,
    },

    listContainer: {
        flexDirection: "column",
        gap: 12,
        flexWrap: "wrap",
        paddingRight: 10
    },

    listItem: {
        borderRadius: 16,
        width: 100,
        height: 100,
        position: "relative",
        backgroundColor: appColors.primaryLight,
    },

    image: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
    },

    categoryName: {
        position: "absolute",
        ...appTexts.paragraphExtraSmallRegular,
        color: appColors.textLight,

        backgroundColor: appColors.bgTags,

        alignSelf: "center",
        bottom: 8,

        paddingHorizontal: 12,
        paddingVertical: 4,
        textAlign: "center",

        borderRadius: 20,
    },

    actionButton: {
        paddingTop: 12,
        ...appTexts.paragraphSmallRegular,
        color: appColors.primary,
    },
});

export default styles;
