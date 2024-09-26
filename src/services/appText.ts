import { StyleProp, TextStyle } from "react-native";
import appColors from "./appColors";

const titleLargeMedium: StyleProp<TextStyle> = {
    fontSize: 24,
    fontWeight: "semibold",
    fontFamily: "Roboto",
};

const paragraphLargeRegular: StyleProp<TextStyle> = {
    fontSize: 16,
    fontWeight: "regular",
    fontFamily: "inter, sans-serif",
};

const paragraphSmallRegular: StyleProp<TextStyle> = {
    fontSize: 12,
    fontWeight: "regular",
    fontFamily: "Roboto",
};

const titleSmallSemiBold: StyleProp<TextStyle> = {
    fontSize: 16,
    fontWeight: "semibold",
    fontFamily: "Roboto",
};

const paragraphExtraSmallRegular: StyleProp<TextStyle> = {
    fontSize: 10,
    fontWeight: "regular",
    fontFamily: "Roboto",
};

const titleMediumSemiBold: StyleProp<TextStyle> = {
    fontSize: 18,
    fontWeight: "semibold",
    fontFamily: "Roboto",
};

const paragraphMediumRegular: StyleProp<TextStyle> = {
    fontSize: 14,
    fontWeight: "regular",
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
};

export default appTexts;
