import FavoriteFilterEnum from "../../enums/favoriteFilterEnum";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./favoriteScreenFilterStyles";
import appColors from "../../styles/appColors";
import React from "react";

type FavoriteScreenFilter = {
    handleFilterClick: (filter: FavoriteFilterEnum) => void;
    active: FavoriteFilterEnum;
};

export default function FavoriteScreenFilter({ handleFilterClick, active }: FavoriteScreenFilter) {
    return (
        <View style={styles.filterBox}>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.filterItem}
                onPress={() => handleFilterClick(FavoriteFilterEnum.all)}
            >
                <MaterialIcons
                    name="brunch-dining"
                    size={16}
                    color={active === FavoriteFilterEnum.all ? appColors.primary : appColors.textMedium}
                />
                <Text style={active === FavoriteFilterEnum.all ? styles.filterTextActive : styles.filterTextInactive}>
                    All
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.filterItem}
                onPress={() => handleFilterClick(FavoriteFilterEnum.food)}
            >
                <MaterialIcons
                    name="dinner-dining"
                    size={16}
                    color={active === FavoriteFilterEnum.food ? appColors.primary : appColors.textMedium}
                />
                <Text style={active === FavoriteFilterEnum.food ? styles.filterTextActive : styles.filterTextInactive}>
                    Foods
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.filterItem}
                onPress={() => handleFilterClick(FavoriteFilterEnum.drink)}
            >
                <MaterialIcons
                    name="local-bar"
                    size={16}
                    color={active === FavoriteFilterEnum.drink ? appColors.primary : appColors.textMedium}
                />
                <Text style={active === FavoriteFilterEnum.drink ? styles.filterTextActive : styles.filterTextInactive}>
                    Drinks
                </Text>
            </TouchableOpacity>
        </View>
    );
}
