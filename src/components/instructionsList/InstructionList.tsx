import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Foundation from "@expo/vector-icons/Foundation";
import appColors from "../../styles/appColors";
import styles from "./instructionListStyles";
import * as Speech from "expo-speech";
import React from "react";

type InstructionListProps = {
    lines: string[];
};

type TalkItemProps = {
    text: string;
};

export default function InstructionList({ lines }: InstructionListProps) {
    return (
        <ScrollView style={{ height: 300 }} contentContainerStyle={styles.talkList}>
            {lines.map((item, index) => (
                <TalkItem text={item} key={index} />
            ))}
        </ScrollView>
    );
}

function TalkItem({ text }: TalkItemProps) {
    function talk() {
        Speech.speak(text);
    }
    return (
        <View style={styles.talkItem}>
            <Text style={styles.talkText}>{text}</Text>
            <TouchableOpacity style={styles.talkButton} activeOpacity={0.8} onPress={talk}>
                <Text style={styles.talkButtonText}>Falar</Text>
                <Foundation name="sound" size={20} color={appColors.textLight} />
            </TouchableOpacity>
        </View>
    );
}
