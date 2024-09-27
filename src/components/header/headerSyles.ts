import { StyleSheet } from "react-native";
import appColors from "../../services/appColors";
import appTexts from "../../services/appText";

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: {
        ...appTexts.titleMediumSemiBold,
        color: appColors.textDark,
    },
});

export default styles;
