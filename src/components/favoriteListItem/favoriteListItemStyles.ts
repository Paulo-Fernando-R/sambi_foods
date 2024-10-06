import { StyleSheet } from "react-native";
import appTexts from "../../styles/appText";
import appColors from "../../styles/appColors";

const styles = StyleSheet.create({

    itemBox:{
        backgroundColor:appColors.primaryLight,
        borderRadius: 20,
        width: "49%",
        gap: 8
    },

    placeholder: {
        borderRadius: 20,
        overflow: 'hidden',
        width: "49%",
        gap: 8,
        height: 250
    },
    image:{
        width: "100%",
        aspectRatio: "1/1",
        borderRadius: 20,
    },
    itemTestTagContainer: {
        marginHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: appColors.textLight,
        borderRadius: 20,
        gap: 4,
        alignSelf: "flex-start",
    },
    itemTextTag: {
        ...appTexts.paragraphExtraSmallRegular,
        color: appColors.textMedium,
    },
    itemTitle:{
        ...appTexts.paragraphLargeRegular,
        color: appColors.textLight,
        paddingHorizontal: 20,

    },
    itemSubTitle:{
        ...appTexts.paragraphSmallRegular,
        color: appColors.textMediumLight,
        paddingHorizontal: 20,
        paddingBottom: 20
    }

  
})

export default styles