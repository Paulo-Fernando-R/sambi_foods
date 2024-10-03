import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import { DrinksNavigationProp, FoodsNavigationProp } from "../../types/navigationTypes";
import DrinkCategory from "../../models/drinkCategory";
import { Code } from "react-content-loader/native";
import SearchType from "../../enums/searchType";
import appColors from "../../styles/appColors";
import React from "react";
import styles from "./drinkTagsStyles";

type DrinkTagsProps = {
    isLoading: boolean | undefined;
    list: DrinkCategory[] | undefined;
    navigation: DrinksNavigationProp;
};

export default function DrinkTags({ isLoading, list, navigation }: DrinkTagsProps) {
    function navigate(tag: string) {
        navigation.navigate("DrinksSearch", { query: tag, type: SearchType.category });
    }

    if (isLoading || !list) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Por país</Text>

                <CountryTagsSkeleton />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Por país</Text>

            <View>
                <View style={styles.listContainer}>
                    {list.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                activeOpacity={0.8}
                                onPress={() => navigate(item.strCategory)}
                            >
                                <Text style={styles.listItem}>{item.strCategory}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        </View>
    );
}

function CountryTagsSkeleton() {
    return (
        <View style={styles.skeleton}>
            <Code backgroundColor={appColors.textMediumLight} foregroundColor={appColors.skeletonForeground} />
            <Code backgroundColor={appColors.textMediumLight} foregroundColor={appColors.skeletonForeground} />
        </View>
    );
}
