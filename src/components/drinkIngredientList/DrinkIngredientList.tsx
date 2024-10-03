import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { DrinksNavigationProp } from "../../types/navigationTypes";
import ContentLoader, { Rect } from "react-content-loader/native";
import DrinkIngredient from "../../models/drinkIngredient";
import styles from "./drinkIngredientListStyles";
import SearchType from "../../enums/searchType";
import appColors from "../../styles/appColors";
import React from "react";

type DrinkIngredientListProps = {
    list: DrinkIngredient[] | undefined;
    isLoading: boolean | undefined;
    navigation: DrinksNavigationProp;
};

type DrinkIngredientItemProps = { data: DrinkIngredient; navigate(tag: string): void };

export default function DrinkIngredientList({ list, isLoading, navigation }: DrinkIngredientListProps) {
    let aux: string[] = [];

    if (isLoading || !list) {
        aux = ["", "", "", "", "", "", "", "", "", "", "", ""];
    }

    function navigate(tag: string) {
        navigation.navigate("DrinksSearch", { query: tag, type: SearchType.ingredients });
    }

    //const smallList = list?.slice(0, Math.floor(list.length / 2));

    return (
        <View style={styles.container}>
            <Text style={styles.title}>By ingredient</Text>
            <ScrollView contentContainerStyle={styles.listContainer} horizontal={true}>
                {isLoading || !list
                    ? aux.map((_, index) => {
                          return <CategoryItemSkeleton key={index} />;
                      })
                    : list.map((item, index) => {
                          return <CategoryItem data={item} navigate={navigate} key={index} />;
                      })}
            </ScrollView>
        </View>
    );
}

function CategoryItemSkeleton() {
    return (
        <View style={{ borderRadius: 20, overflow: "hidden" }}>
            <ContentLoader
                style={styles.listItemSkeleton}
                backgroundColor={appColors.textMediumLight}
                foregroundColor={appColors.skeletonForeground}
            >
                <Rect x={0} y={0} width={100} height={100} />
            </ContentLoader>
        </View>
    );
}

function CategoryItem({ data, navigate }: DrinkIngredientItemProps) {
    return (
        <TouchableOpacity style={styles.listItem} activeOpacity={0.8} onPress={() => navigate(data.strIngredient1)}>
            <Image style={styles.image} source={{ uri: data.image }} />
            <Text style={styles.categoryName}>{data.strIngredient1}</Text>
        </TouchableOpacity>
    );
}
