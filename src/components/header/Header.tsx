import { View, Text } from "react-native";
import styles from "./headerSyles";
import React from "react";
import BackButton from "../../components/backButton/BackButton";

type HeaderProps = {
    goBack: () => void;
    title: string
};

export default function Header({ goBack, title }: HeaderProps) {
    return (
        <View style={styles.header}>
            <BackButton onPress={goBack} />
            <Text style={styles.headerTitle}>{title}</Text>
            <Text style={{ width: 32 }} />
        </View>
    );
}
