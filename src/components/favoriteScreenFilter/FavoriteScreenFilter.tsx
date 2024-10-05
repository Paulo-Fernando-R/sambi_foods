import { View, Text, TouchableOpacity } from "react-native";
import styles from "./favoriteScreenFilterStyles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import appColors from "../../styles/appColors";

export default function FavoriteScreenFilter() {
    const [active, setActive] = useState(1);

    const handleFilterClick = (filter: number) => {
        setActive(filter);
    };

    return (
        <View style={styles.filterBox}>
            <TouchableOpacity activeOpacity={0.8} style={styles.filterItem} onPress={() => handleFilterClick(1)}>
                <MaterialIcons
                    name="brunch-dining"
                    size={16}
                    color={active === 1 ? appColors.primary : appColors.textMedium}
                />
                <Text style={active === 1 ? styles.filterTextActive : styles.filterTextInactive}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.filterItem} onPress={() => handleFilterClick(2)}>
                <MaterialIcons
                    name="dinner-dining"
                    size={16}
                    color={active === 2 ? appColors.primary : appColors.textMedium}
                />
                <Text style={active === 2 ? styles.filterTextActive : styles.filterTextInactive}>Foods</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.filterItem} onPress={() => handleFilterClick(3)}>
                <MaterialIcons
                    name="local-bar"
                    size={16}
                    color={active === 3 ? appColors.primary : appColors.textMedium}
                />
                <Text style={active === 3 ? styles.filterTextActive : styles.filterTextInactive}>Drinks</Text>
            </TouchableOpacity>
        </View>
    );
}
