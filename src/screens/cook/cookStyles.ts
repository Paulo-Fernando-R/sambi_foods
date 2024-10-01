import { Dimensions, StyleSheet } from "react-native";
import appTexts from "../../styles/appText";
import appColors from "../../styles/appColors";

const styles = StyleSheet.create({
    cookContainer: {
        paddingTop: 48,
        gap: 30,
        justifyContent: "flex-start",
        overflow: "visible",
        height: Dimensions.get('screen').height - 60
    },

    webViweWrapper: {
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 20,
    },

    titleWrapper: {
        paddingHorizontal: 20,
    },

    title: {
        ...appTexts.titleMediumSemiBold,
        color: appColors.primary,
        paddingHorizontal: 20,
    },
    webView: {
        //flex: 1,
    },
});

export default styles;
