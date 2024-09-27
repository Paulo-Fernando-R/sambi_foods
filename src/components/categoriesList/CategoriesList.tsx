import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import styles from "./categoriesLinkStyles";
import React from "react";
import FoodCategory from "../../models/foodCategoty";

type CategoriesListProps = {
    list: FoodCategory[];
};

export default function CategoriesList({ list }: CategoriesListProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categorias</Text>
            <ScrollView contentContainerStyle={styles.listContainer} horizontal={true}>
                {list.map((item, index) => {
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

function CategoryItem(props: FoodCategory) {
    return (
        <TouchableOpacity style={styles.listItem} activeOpacity={0.8}>
            <Image style={styles.image} src={props.strCategoryThumb} />
            <Text style={styles.categoryName}>{props.strCategory}</Text>
        </TouchableOpacity>
    );
}
