import { Dimensions, StyleSheet } from "react-native";
import appTexts from "../../styles/appText";
import appColors from "../../styles/appColors";

const styles = StyleSheet.create({
    DetailsContainer: {
        flex: 1,
        paddingTop: 48,
        paddingHorizontal: 20,
        gap: 30,
    },
    webViweWrapper:{
        width: '100%',
        height: Dimensions.get('window').height / 4,
        borderRadius: 12,
        overflow: "hidden",
    },
    webView: {
        flex: 1,
       
    },
});

export default styles;
