import { View, Text, FlatList, Image } from "react-native";
import styles from "./ingredientsListStyles";
import React from "react";

type IngredientsListProps = {
    ingredients: string[];
    measures: string[];
    imgUrl: string;
};
type IngredientItemProps = {
    name: string;
    measure: string;
    imgUrl: string;
};

export default function IngredientsList({ ingredients, measures, imgUrl }: IngredientsListProps) {
    return (
        <FlatList
            style={styles.container}
            contentContainerStyle={styles.ingredients}
            data={ingredients}
            horizontal={true}
            renderItem={({ index, item }) => <IngredientsItem name={item} measure={measures[index]} imgUrl={imgUrl} />}
        />
    );
}

function IngredientsItem({ measure, name, imgUrl }: IngredientItemProps) {
    const img = imgUrl + name + ".png";

    return (
        <View style={styles.ingredientItem}>
            <Image style={styles.image} src={img} />
            <Text numberOfLines={2} style={styles.ingredientItemText1}>
                {name}
            </Text>
            <Text numberOfLines={2} style={styles.ingredientItemText2}>
                {measure}
            </Text>
        </View>
    );
}
