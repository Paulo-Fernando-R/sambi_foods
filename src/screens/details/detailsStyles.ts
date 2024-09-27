import { StyleSheet } from "react-native";
import appTexts from "../../styles/appText";
import appColors from "../../styles/appColors";

const styles = StyleSheet.create({
    DetailsContainer: {
        flex: 1,
        paddingTop: 48,
        paddingHorizontal: 20,
        gap: 30,
    },
    image: {
        width: "100%",
        aspectRatio: "1/1",
        borderRadius: 20,
    },

    title:{
        flexDirection: 'row',
        justifyContent:'space-between'
    },

    scrollView: {
       // flex: 1,
        gap: 30,
    },

    name: {
        ...appTexts.titleLargeMedium,
        color: appColors.textDark,
    },

    tagsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
    },

    tagText: {
        ...appTexts.paragraphExtraSmallRegular,
        color: appColors.textLight,
        backgroundColor: appColors.primaryLight,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        flex: 1,
        textAlign: "center",
    },

    ingredientContainer: {
        gap: 8,
    },

    subtitle: {
        ...appTexts.titleSmallSemiBold,
        color: appColors.primary,
    },
    paragraph: {
        ...appTexts.paragraphSmallRegular,
        color: appColors.textDark,
    },
    button: {
        backgroundColor: appColors.primary,
        height: 57,
        borderRadius: 40,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    buttonText: {
        ...appTexts.titleMediumSemiBold,
        color: appColors.textLight
    }
});

export default styles;
