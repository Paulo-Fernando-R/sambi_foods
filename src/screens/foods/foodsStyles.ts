import { StyleSheet } from "react-native";
import appTexts from "../../services/appText";
import appColors from "../../services/appColors";

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        paddingTop: 48,
        //paddingHorizontal: 20,
        gap: 30,
    },
    scrollArea: {
        flex: 1,
    },
    scrollAreaContent: {
        gap: 30,
    },

    title: {
        ...appTexts.titleLargeMedium,
        color: appColors.textDark,
        width: "80%",
        paddingHorizontal: 20
    },
});

export default styles;
