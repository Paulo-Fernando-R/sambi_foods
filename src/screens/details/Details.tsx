import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { FoodsDetailsRouteProp, FoodsNavigationProp } from "../../types/navigationTypes";
import ContentLoader, { Rect, Code } from "react-content-loader/native";
import Favorite from "../../components/favorite/Favorite";
import Header from "../../components/header/Header";
import DetailsController from "./detailsController";
import { useQuery } from "@tanstack/react-query";
import appColors from "../../styles/appColors";
import styles from "./detailsStyles";
import React from "react";

type DetailsProps = {
    navigation: FoodsNavigationProp;
    route: FoodsDetailsRouteProp;
};

type DetailsSkeletonProps = {
    goBack(): void;
    name: string;
};

export default function Details({ navigation, route }: DetailsProps) {
    const { id, name } = route.params;
    const controller = new DetailsController();
    function goBack() {
        navigation.goBack();
    }

    function navigate() {
        navigation.navigate("FoodsCook", { recipe: data?.food! });
    }

    async function add() {
        await controller.addFavoriteFood(data?.food!);
        refetch();
    }

    async function remove() {
        await controller.removeFavoriteFood(data?.food!);
        refetch();
    }

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["foodDetails" + id],
        queryFn: () => controller.getDetails(id),
    });

    if (isLoading || !data) {
        return <DetailsSkeleton goBack={goBack} name={name} />;
    }

    const ingredient = controller.listIngredients(data.food);

    return (
        <View style={styles.DetailsContainer}>
            <Header goBack={goBack} title={name} />

            <ScrollView contentContainerStyle={styles.scrollView}>
                <Image style={styles.image} src={data.food.strMealThumb} alt="" />

                <View style={styles.title}>
                    <Text style={styles.name}>{data.food.strMeal}</Text>
                    <Favorite isFavorite={data.fav} add={add} remove={remove} />
                </View>

                <View style={styles.tagsContainer}>
                    <Text style={styles.tagText}>{data.food.strArea}</Text>

                    <Text style={styles.tagText}>{data.food.strCategory}</Text>
                    <Text style={styles.tagText}>{ingredient.length} Ingredientes</Text>
                </View>

                <View style={styles.ingredientContainer}>
                    <Text style={styles.subtitle}>Ingredientes</Text>
                    <Text style={styles.paragraph}>{ingredient.join(" | ")}</Text>
                </View>

                <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={navigate}>
                    <Text style={styles.buttonText}>Começar a cozinhar</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

function DetailsSkeleton({ goBack, name }: DetailsSkeletonProps) {
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
