import { Dimensions, StyleSheet } from "react-native";
import appTexts from "../../styles/appText";
import appColors from "../../styles/appColors";

const styles = StyleSheet.create({
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
