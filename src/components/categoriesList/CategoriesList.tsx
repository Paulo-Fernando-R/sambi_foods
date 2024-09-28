import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import styles from "./categoriesLinkStyles";
import React from "react";
import FoodCategory from "../../models/foodCategoty";
import ContentLoader, { Rect } from "react-content-loader/native";
import appColors from "../../styles/appColors";

type CategoriesListProps = {
    list: FoodCategory[] | undefined;
    isLoading: boolean | undefined;
};

export default function CategoriesList({ list, isLoading }: CategoriesListProps) {
    let aux: string[] = [];
    if (isLoading || !list) {
        aux = ["", "", "", "", "", "", "", "", "", "", "", ""];
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categorias</Text>
            <ScrollView contentContainerStyle={styles.listContainer} horizontal={true}>
                {isLoading || !list
                    ? aux.map((_, index) => {
                          return <CategoryItemSkeleton key={index} />;
                      })
                    : list.map((item, index) => {
                          return (
                              <CategoryItem
                                  idCategory={item.idCategory}
                                  strCategory={item.strCategory}
                                  strCategoryDescription={item.strCategoryDescription}
                                  strCategoryThumb={item.strCategoryThumb}
                                  key={index}
                              />
                          );
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

function CategoryItem(props: FoodCategory) {
    return (
        <TouchableOpacity style={styles.listItem} activeOpacity={0.8}>
            <Image style={styles.image} src={props.strCategoryThumb} />
            <Text style={styles.categoryName}>{props.strCategory}</Text>
        </TouchableOpacity>
    );
}
