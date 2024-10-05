import { StyleSheet } from "react-native";
import appTexts from "../../styles/appText";
import appColors from "../../styles/appColors";

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        paddingTop: 48,
        paddingHorizontal: 20,
        gap: 30,
    },
    scrollArea: {
        flex: 1,
    },
    scrollAreaContent: {
        gap: 10,
       
        
    },

    title: {
        ...appTexts.titleLargeMedium,
        color: appColors.textDark,
        fontWeight: 'bold',
        width: "80%",
    },

  
})

export default styles