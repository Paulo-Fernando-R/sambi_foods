import { StyleSheet } from "react-native";
import appTexts from "../../styles/appText";
import appColors from "../../styles/appColors";

const styles = StyleSheet.create({
    container: {
        gap: 12,
        paddingHorizontal: 20,
    },
    title: {
        ...appTexts.titleSmallSemiBold,
        color: appColors.primary,
    },

    skeleton:{
        height: 150,
        overflow: 'hidden'
    },

    listContainer: {
        flexDirection: "row",
        gap: 12,
        flexWrap: "wrap",
    },

    listItem: {
        ...appTexts.paragraphExtraSmallRegular,
        fontSize: 12,
        color: appColors.textLight,
        padding: 10,
        backgroundColor: appColors.bgTags,
        borderRadius: 16,
    },

    actionButton: {
        paddingTop: 12,
        ...appTexts.paragraphSmallRegular,
        color: appColors.primary,
    },
});

export default styles;
