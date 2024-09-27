import { StyleSheet } from "react-native";
import appTexts from "../../styles/appText";
import appColors from "../../styles/appColors";

const styles = StyleSheet.create({
    tabBarBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: 60,
        borderTopColor: appColors.textMediumLight,
        borderTopWidth: 1,
        backgroundColor: appColors.bgLight
    },

    tabBarButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
    },
    tabActive: {
        backgroundColor: appColors.bgIcon,
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
    },
    tabBarTextAcive: {
        ...appTexts.paragraphSmallRegular,
        color: appColors.primary,
    },
});
export default styles;
