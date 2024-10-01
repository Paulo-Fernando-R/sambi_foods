import { StyleProp, TextStyle } from "react-native";
import appColors from "./appColors";

const titleLargeMedium: StyleProp<TextStyle> = {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Roboto",
};

const paragraphLargeRegular: StyleProp<TextStyle> = {
    fontSize: 16,
    fontWeight: "regular",
    fontFamily: "Roboto",
};

const paragraphSmallRegular: StyleProp<TextStyle> = {
    fontSize: 12,
    fontWeight: "regular",
    fontFamily: "Roboto",
};

const titleSmallSemiBold: StyleProp<TextStyle> = {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Roboto",
};

const paragraphExtraSmallRegular: StyleProp<TextStyle> = {
    fontSize: 10,
    fontWeight: "regular",
    fontFamily: "Roboto",
};

const titleMediumSemiBold: StyleProp<TextStyle> = {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto",
};

const paragraphMediumRegular: StyleProp<TextStyle> = {
    fontSize: 14,
    fontWeight: "regular",
    fontFamily: "Roboto",
};

const loginPageSubtitle: StyleProp<TextStyle> = {
    fontSize: 20,
    fontWeight: "light",
    fontFamily: "Roboto",
};
const loginPageTitle: StyleProp<TextStyle> = {
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: "Roboto",
};

const appTexts = {
    titleLargeMedium,
    paragraphLargeRegular,
    paragraphSmallRegular,
    titleSmallSemiBold,
    paragraphExtraSmallRegular,
    titleMediumSemiBold,
    paragraphMediumRegular,
    loginPageSubtitle,
    loginPageTitle,
};

export default appTexts;
