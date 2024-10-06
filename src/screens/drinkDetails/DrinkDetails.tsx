import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { DrinksNavigationProp, DrinksDetailsRouteProp, DrinksDetailsNavigationProp } from "../../types/navigationTypes";
import ContentLoader, { Rect, Code } from "react-content-loader/native";
import Favorite from "../../components/favorite/Favorite";
import DetailsController from "./drinkDetailsController";
import Header from "../../components/header/Header";
import { useQuery } from "@tanstack/react-query";
import appColors from "../../styles/appColors";
import styles from "./drinkDetailsStyles";
import React from "react";

type DrinkDetailsProps = {
    navigation: DrinksNavigationProp;
    route: DrinksDetailsRouteProp;
};

type DrinkDetailsSkeletonProps = {
    goBack(): void;
    name: string;
};

export default function DrinkDetails({ navigation, route }: DrinkDetailsProps) {
    const { id, name } = route.params;
    const controller = new DetailsController();
    function goBack() {
        navigation.goBack();
    }

    function navigate() {
        navigation.navigate("DrinksCook", { recipe: data?.drink! });
    }

    async function add() {
        await controller.addFavoriteDrink(data?.drink!);
        refetch();
    }

    async function remove() {
        await controller.removeFavoriteDrink(data?.drink!);
        refetch();
    }

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["details" + id],
        queryFn: () => controller.getDetails(id),
    });

    if (isLoading || !data) {
        return <DrinkDetailsSkeleton goBack={goBack} name={name} />;
    }

    const ingredient = controller.listIngredients(data.drink);

    return (
        <View style={styles.DetailsContainer}>
            <Header goBack={goBack} title={name} />

            <ScrollView contentContainerStyle={styles.scrollView}>
                <Image style={styles.image} src={data.drink.strDrinkThumb} alt="" />

                <View style={styles.title}>
                    <Text style={styles.name}>{data.drink.strDrink}</Text>
                    <Favorite isFavorite={data.fav} add={add} remove={remove} />
                </View>

                <View style={styles.tagsContainer}>
                    <Text style={styles.tagText}>{data.drink.strCategory}</Text>

                    <Text style={styles.tagText}>{data.drink.strCategory}</Text>
                    <Text style={styles.tagText}>{ingredient.length} Ingredientes</Text>
                </View>

                <View style={styles.ingredientContainer}>
                    <Text style={styles.subtitle}>Ingredients</Text>
                    <Text style={styles.paragraph}>{ingredient.join(" | ")}</Text>
                </View>

                <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={navigate}>
                    <Text style={styles.buttonText}>Start preparing</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

function DrinkDetailsSkeleton({ goBack, name }: DrinkDetailsSkeletonProps) {
    return (
        <View style={styles.DetailsContainer}>
            <Header goBack={goBack} title={name} />

            <View style={{ borderRadius: 20, overflow: "hidden" }}>
                <ContentLoader
                    style={styles.listItemSkeleton}
                    backgroundColor={appColors.textMediumLight}
                    foregroundColor={appColors.skeletonForeground}
                >
                    <Rect x={0} y={0} width={Dimensions.get("window").width} height={380} />
                </ContentLoader>
            </View>

            <Code backgroundColor={appColors.textMediumLight} foregroundColor={appColors.skeletonForeground} />

            <View style={{ borderRadius: 20, overflow: "hidden" }}>
                <ContentLoader
                    style={styles.buttonSkeleton}
                    backgroundColor={appColors.textMediumLight}
                    foregroundColor={appColors.skeletonForeground}
                >
                    <Rect x={0} y={0} width={Dimensions.get("window").width} height={80} />
                </ContentLoader>
            </View>
        </View>
    );
}
