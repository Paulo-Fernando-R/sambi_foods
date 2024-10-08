import DrinkIngredientList from "../../components/drinkIngredientList/DrinkIngredientList";
import { View, Text, TextInput, ScrollView, Alert } from "react-native";
import SearchInput from "../../components/searchInput/SearchInput";
import { DrinksNavigationProp } from "../../types/navigationTypes";
import DrinkTags from "../../components/drinkTags/DrinkTags";
import { useQuery } from "@tanstack/react-query";
import FoodsController from "./drinksController";
import React, { useRef } from "react";
import styles from "./drinksStyles";

type FoodsHomeProps = {
    navigation: DrinksNavigationProp;
};

export default function Drinks({ navigation }: FoodsHomeProps) {
    const controller = new FoodsController();
    const ref = useRef<TextInput>(null);

    const { data, error, isLoading, isFetching, isRefetching } = useQuery({
        queryKey: ["drinkResources"],
        queryFn: () => controller.getResources(),
    });

    if (error) {
        Alert.alert("Ocorreu um erro", error.message);
    }

    return (
        <View style={styles.screenContainer}>
            <Text style={styles.title}>Find the best drinks here</Text>
            <SearchInput placeholder="Search drinks" inputRef={ref} navigationDrink={navigation} />
            <ScrollView style={styles.scrollArea} contentContainerStyle={styles.scrollAreaContent}>
                <DrinkTags isLoading={isLoading} list={data?.categories} navigation={navigation} />
                <DrinkIngredientList list={data?.ingredients} isLoading={isLoading} navigation={navigation} />
            </ScrollView>
        </View>
    );
}
