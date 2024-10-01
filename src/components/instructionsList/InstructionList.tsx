import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Foundation from "@expo/vector-icons/Foundation";
import appColors from "../../styles/appColors";
import styles from "./instructionListStyles";
import * as Speech from "expo-speech";
import React, { useState } from "react";

type InstructionListProps = {
    lines: string[];
};

type TalkItemProps = {
    text: string;
    index: number;
    setIsSpeaking: React.Dispatch<React.SetStateAction<number>>;
    currentSpeak: number;
};

export default function InstructionList({ lines }: InstructionListProps) {
    const [isSpeaking, setIsSpeaking] = useState(-1);
    return (
        <ScrollView contentContainerStyle={styles.talkList}>
            {lines.map((item, index) => (
                <TalkItem
                    text={item}
                    key={index}
                    index={index}
                    setIsSpeaking={setIsSpeaking}
                    currentSpeak={isSpeaking}
                />
            ))}
        </ScrollView>
    );
}

function TalkItem({ text, index, setIsSpeaking, currentSpeak }: TalkItemProps) {
    // function speak() {
    //     Speech.stop();
    //     Speech.speak(text);
    //     setIsSpeaking(true);
    // }

    // function stop() {
    //     Speech.stop();
    //     setIsSpeaking(false);
    // }
    // const [isSpeaking, setIsSpeaking] = useState(false);

    function speak() {
        setIsSpeaking(index);
        Speech.stop();
        Speech.speak(text);
    }

    function stop() {
        setIsSpeaking(-1);
        Speech.stop();
    }

    function isSpeaking() {
        return index === currentSpeak;
    }

    return (
        <View style={styles.talkItem}>
            <Text style={styles.talkText}>{text}</Text>
            <TouchableOpacity style={styles.talkButton} activeOpacity={0.8} onPress={isSpeaking() ? stop : speak}>
                <Text style={styles.talkButtonText}>{isSpeaking() ? "Parar" : "Falar"}</Text>
                <Foundation name="sound" size={20} color={appColors.textLight} />
            </TouchableOpacity>
        </View>
    );
}
