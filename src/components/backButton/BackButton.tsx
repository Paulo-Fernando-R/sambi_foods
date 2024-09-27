import { TouchableOpacity } from "react-native";
import styles from "./backButtonStyles";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import appColors from "../../styles/appColors";

type BackButtonProps = {
    onPress: () => void;
};

export default function BackButton({ onPress }: BackButtonProps) {
    return (
        <TouchableOpacity style={styles.backButton} activeOpacity={0.8} onPress={onPress}>
            <Entypo name="chevron-left" size={24} color={appColors.textLight} />
        </TouchableOpacity>
    );
}
