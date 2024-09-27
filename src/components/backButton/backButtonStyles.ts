import { StyleSheet } from "react-native";
import appColors from "../../services/appColors";

const styles = StyleSheet.create({
    backButton: {
        width: 32,
        height: 32,
        borderRadius: 30,
        backgroundColor: appColors.bgTags,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles;
