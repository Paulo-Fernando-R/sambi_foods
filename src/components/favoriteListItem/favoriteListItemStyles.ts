import { StyleSheet } from "react-native";
import appTexts from "../../styles/appText";
import appColors from "../../styles/appColors";

const styles = StyleSheet.create({

    itemBox:{
        backgroundColor:appColors.bgTags,
        borderRadius: 20,
        width: "49%",
        gap: 8
    },
    image:{
        width: "100%",
        aspectRatio: "1/1",
        borderRadius: 20,
    },
    tag:{
        marginHorizontal:20,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 20,
        ...appTexts.paragraphExtraSmallRegular,
        color: appColors.textMedium,
        backgroundColor: appColors.textLight,
        alignSelf:'flex-start',
        gap: 4
    },
    itemTitle:{
        ...appTexts.paragraphLargeRegular,
        color: appColors.textLight,
        paddingHorizontal: 20,

    },
    itemSubTitle:{
        ...appTexts.paragraphSmallRegular,
        color: appColors.textLight,
        paddingHorizontal: 20,
        paddingBottom: 20
    }

  
})

export default styles