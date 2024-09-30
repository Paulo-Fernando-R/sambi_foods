import { View, Text, TextInput, ScrollView, Alert } from "react-native";
import styles from "./foodsStyles";
import React, { useRef } from "react";
import SearchInput from "../../components/searchInput/SearchInput";
import CountryTags from "../../components/countryTags/CountryTags";
import CategoriesList from "../../components/categoriesList/CategoriesList";
import { useQuery } from "@tanstack/react-query";
import FoodsController from "./foodsController";
import { FoodsNavigationProp } from "../../types/navigationTypes";

type FoodsHomeProps = {
    navigation: FoodsNavigationProp;
};

export default function Foods({ navigation }: FoodsHomeProps) {
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
            <SearchInput placeholder="Pesquisar receitas" inputRef={ref} navigation={navigation} />
            <ScrollView style={styles.scrollArea} contentContainerStyle={styles.scrollAreaContent}>
                <CountryTags isLoading={isLoading} list={data?.countries} navigation={navigation} />
                <CategoriesList list={data?.categories} isLoading={isLoading} navigation={navigation} />
            </ScrollView>
        </View>
    );
}
