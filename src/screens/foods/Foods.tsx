import { View, Text, TextInput, ScrollView } from "react-native";
import styles from "./foodsStyles";
import React, { useRef } from "react";
import SearchInput from "../../components/searchInput/SearchInput";
import CountryTags from "../../components/countryTags/CountryTags";
import CategoriesList from "../../components/categoriesList/CategoriesList";

export default function Foods() {
    const ref = useRef<TextInput>(null);

    return (
        <View style={styles.screenContainer}>
            <Text style={styles.title}>Encontre as melhores receitas</Text>
            <SearchInput placeholder="Pesquisar receitas" inputRef={ref} />
            <ScrollView style={styles.scrollArea} contentContainerStyle={styles.scrollAreaContent}>
                <CountryTags />
                <CategoriesList />
            </ScrollView>
            
        </View>
    );
}
