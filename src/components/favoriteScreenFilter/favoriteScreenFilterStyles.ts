import { StyleSheet } from "react-native";
import appTexts from "../../styles/appText";
import appColors from "../../styles/appColors";

const styles = StyleSheet.create({
    filterBox:{
        flexDirection: 'row',
        gap: 12
    },

    filterItem:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        gap:4
    },

    filterTextInactive:{
        ...appTexts.titleSmallSemiBold,
        color: appColors.textMedium
    },
    filterTextActive:{
        ...appTexts.titleSmallSemiBold,
        color: appColors.primary
    },

})

export default styles