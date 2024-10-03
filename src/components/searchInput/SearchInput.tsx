import { View, TextInput } from "react-native";
import styles from "./searchInputStyles";
import React from "react";
import appColors from "../../styles/appColors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { DrinksNavigationProp, FoodsNavigationProp } from "../../types/navigationTypes";
import SearchType from "../../enums/searchType";

type SearchInputProps = {
    placeholder: string;
    inputRef: React.RefObject<TextInput>;
    navigationFood?: FoodsNavigationProp;
    navigationDrink?: DrinksNavigationProp;
};

export default function SearchInput({ placeholder, inputRef, navigationFood, navigationDrink }: SearchInputProps) {
    function navigate(tag: string) {
        if (tag.length < 3) {
            return;
        }
        if (navigationFood) navigationFood.navigate("FoodsSearch", { query: tag, type: SearchType.name });
        if (navigationDrink) navigationDrink.navigate("DrinksSearch", { query: tag, type: SearchType.name });
    }

    return (
        <View style={styles.inputConatiner}>
            <TextInput
                ref={inputRef}
                onChangeText={(e) => (inputRef.current!.value = e)}
                placeholder={placeholder}
                placeholderTextColor={appColors.primaryLight}
                onKeyPress={(e) => {
                    if (e.nativeEvent.key === "Enter") {
                        navigate(inputRef.current!.value);
                    }
                }}
            />
            <MaterialIcons
                name="search"
                size={24}
                color={appColors.primaryLight}
                onPress={() => navigate(inputRef.current!.value)}
            />
        </View>
    );
}
