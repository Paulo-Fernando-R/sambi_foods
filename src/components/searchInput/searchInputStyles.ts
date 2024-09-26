import { StyleSheet } from "react-native";
import appTexts from "../../services/appText";
import appColors from "../../services/appColors";

const styles = StyleSheet.create({
    inputConatiner: {
        flexDirection: "row",
        borderColor: appColors.primaryLight,
        borderWidth: 1,
        borderRadius: 50,
        height: 45,
        paddingHorizontal: 20,
        justifyContent: "space-between",
        alignItems: "center",
    },
});

export default styles;
