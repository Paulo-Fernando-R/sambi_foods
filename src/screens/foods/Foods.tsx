import { View, Text, TextInput, ScrollView, Alert } from "react-native";
import styles from "./foodsStyles";
import React, { useRef } from "react";
import SearchInput from "../../components/searchInput/SearchInput";
import CountryTags from "../../components/countryTags/CountryTags";
import CategoriesList from "../../components/categoriesList/CategoriesList";
import { useQuery } from "@tanstack/react-query";
import FoodsController from "./foodsController";
import { FoodsNavigationProp, FoodsRouteProp } from "../../types/navigationTypes";

type FoodsHomeProps = {
    navigation: FoodsNavigationProp;
    route: FoodsRouteProp;
};

export default function Foods({ navigation, route }: FoodsHomeProps) {
    const controller = new FoodsController();
    const ref = useRef<TextInput>(null);

    const { data, error, isLoading, isFetching, isRefetching } = useQuery({
        queryKey: ["resources"],
        queryFn: () => controller.getResources(),
    });

    if (error) {
        Alert.alert("Ocorreu um erro", error.message);
    }

    return (
        <View style={styles.screenContainer}>
            <Text style={styles.title}>Encontre as melhores receitas</Text>
            <SearchInput placeholder="Pesquisar receitas" inputRef={ref} />
            <ScrollView style={styles.scrollArea} contentContainerStyle={styles.scrollAreaContent}>
                <CountryTags isLoading={isLoading} list={data?.countries} />
                <CategoriesList list={data?.categories} isLoading={isLoading} />
            </ScrollView>
        </View>
    );
}
