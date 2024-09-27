import { StyleSheet } from "react-native";
import appColors from "../../services/appColors";
import appTexts from "../../services/appText";

const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        paddingTop: 48,
        paddingHorizontal: 20,
        gap: 30,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: {
        ...appTexts.titleMediumSemiBold,
        color: appColors.textDark,
    },

    listConatiner: {
        gap: 10,
    },

    searchItemContainer: {
        backgroundColor: appColors.primaryLight,
        borderRadius: 20,
        height: 120,
        flexDirection: "row",
        overflow: "hidden",
    },
    itemTextConatiner: {
        padding: 12,
        justifyContent: "space-between",
        flex: 1,
    },
    itemTestTagContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: appColors.textLight,
        borderRadius: 20,
        gap: 4,
        alignSelf: "flex-start",
    },
    itemTextTag: {
        ...appTexts.paragraphExtraSmallRegular,
        color: appColors.textMedium,
    },
    itemTextTitle: {
        ...appTexts.paragraphLargeRegular,
        color: appColors.textLight,
    },
    itemTextArea: {
        ...appTexts.paragraphSmallRegular,
        color: appColors.textMediumLight,
    },

    image: {
        width: "50%",
        objectFit: "cover",
        borderRadius: 20,
    },
});

export default styles;
