import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import styles from "./detailsStyles";
import Header from "../../components/header/Header";
import Favorite from "../../components/favorite/Favorite";
import { FoodsDetailsRouteProp, FoodsNavigationProp } from "../../types/navigationTypes";
import DetailsController from "./detailsController";
import { useQuery } from "@tanstack/react-query";

type DetailsProps = {
    navigation: FoodsNavigationProp;
    route: FoodsDetailsRouteProp;
};

export default function Details({ navigation, route }: DetailsProps) {
    const { id, name } = route.params;
    const controller = new DetailsController();
    function goBack() {
        navigation.goBack();
    }

    const { data, isLoading } = useQuery({
        queryKey: ["details" + id],
        queryFn: () => controller.getDetails(id),
    });

    if (isLoading || !data) {
        return null;
    }

    const ingredient = Object.entries(data)
        .filter((entry) => entry[0].includes("strIngredient"))
        .filter((entry) => entry[1])
        .map((e) => e[1]);

    return (
        <View style={styles.DetailsContainer}>
            <Header goBack={goBack} title={name} />

            <ScrollView contentContainerStyle={styles.scrollView}>
                <Image style={styles.image} src={data.strMealThumb} alt="" />

                <View style={styles.title}>
                    <Text style={styles.name}>{data.strMeal}</Text>
                    <Favorite />
                </View>

                <View style={styles.tagsContainer}>
                    <Text style={styles.tagText}>{data.strArea}</Text>

                    <Text style={styles.tagText}>{data.strCategory}</Text>
                    <Text style={styles.tagText}>{ingredient.length} Ingredientes</Text>
                </View>

                <View style={styles.ingredientContainer}>
                    <Text style={styles.subtitle}>Ingredientes</Text>
                    <Text style={styles.paragraph}>{ingredient.join(" | ")}</Text>
                </View>

                <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                    <Text style={styles.buttonText}>Começar a cozinhar</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
