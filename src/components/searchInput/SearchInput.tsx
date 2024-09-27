import { View, TextInput } from "react-native";
import styles from "./searchInputStyles";
import React from "react";
import appColors from "../../styles/appColors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type SearchInputProps = {
    placeholder: string;
    inputRef: React.RefObject<TextInput>;
};

export default function SearchInput({ placeholder, inputRef }: SearchInputProps) {
    return (
        <View style={styles.inputConatiner}>
            <TextInput ref={inputRef} onChangeText={(e) => inputRef.current!.value = e} placeholder={placeholder} placeholderTextColor={appColors.primaryLight} />
            <MaterialIcons name="search" size={24} color={appColors.primaryLight} />
        </View>
    );
}
