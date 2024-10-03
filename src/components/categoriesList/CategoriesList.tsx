import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import ContentLoader, { Rect } from "react-content-loader/native";
import { FoodsNavigationProp } from "../../types/navigationTypes";
import FoodCategory from "../../models/foodCategoty";
import SearchType from "../../enums/searchType";
import appColors from "../../styles/appColors";
import styles from "./categoriesLinkStyles";
import React from "react";

type CategoriesListProps = {
    list: FoodCategory[] | undefined;
    isLoading: boolean | undefined;
    navigation: FoodsNavigationProp;
};

type CategoryItemProps = { data: FoodCategory; navigate(tag: string): void };

export default function CategoriesList({ list, isLoading, navigation }: CategoriesListProps) {
    let aux: string[] = [];
    if (isLoading || !list) {
        aux = ["", "", "", "", "", "", "", "", "", "", "", ""];
    }

    function navigate(tag: string) {
        navigation.navigate("FoodsSearch", { query: tag, type: SearchType.category });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categories</Text>
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

function CategoryItem({ data, navigate }: CategoryItemProps) {
    return (
        <TouchableOpacity style={styles.listItem} activeOpacity={0.8} onPress={() => navigate(data.strCategory)}>
            <Image style={styles.image} src={data.strCategoryThumb} />
            <Text style={styles.categoryName}>{data.strCategory}</Text>
        </TouchableOpacity>
    );
}
