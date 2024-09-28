import { View, Text, TextInput, ScrollView } from "react-native";
import styles from "./foodsStyles";
import React, { useRef } from "react";
import SearchInput from "../../components/searchInput/SearchInput";
import CountryTags from "../../components/countryTags/CountryTags";
import CategoriesList from "../../components/categoriesList/CategoriesList";
import FoodRepository from "../../repositories/foodRepository";
import { useQuery } from "@tanstack/react-query";
import FoodsController from "./foodsController";

export default function Foods() {
    const controller = new FoodsController();
    const ref = useRef<TextInput>(null);

    const { data, error, isLoading, isFetching, isRefetching } = useQuery({
        queryKey: ["category"],
        queryFn:() => controller.getCategories(),
    });

   // if (!data || error) return null;

    return (
        <View style={styles.screenContainer}>
            <Text style={styles.title}>Encontre as melhores receitas</Text>
            <SearchInput placeholder="Pesquisar receitas" inputRef={ref} />
            <ScrollView style={styles.scrollArea} contentContainerStyle={styles.scrollAreaContent}>
                <CountryTags />
                <CategoriesList list={data!} isLoading={isLoading}/>
            </ScrollView>
        </View>
    );
}
