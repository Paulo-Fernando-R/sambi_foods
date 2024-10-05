import { View, Text, FlatList } from "react-native";
import styles from "./favoriteStyles";
import React from "react";
import { RootTabsFavoriteNavigationProp } from "../../types/navigationTypes";
import FavoriteScreenFilter from "../../components/favoriteScreenFilter/FavoriteScreenFilter";
import FavoriteListItem from "../../components/favoriteListItem/FavoriteListItem";
import { useQuery } from "@tanstack/react-query";
import FavoriteController from "./favoriteController";
export default function Favorite({ navigation }: RootTabsFavoriteNavigationProp) {
    const controller = new FavoriteController();
    const { data } = useQuery({
        queryKey: ["favorite"],
        queryFn: () => controller.getFavorites(),
    });
  
    return (
        <View style={styles.screenContainer}>
            <Text style={styles.title}>Favorites</Text>
            <FavoriteScreenFilter />
            <FlatList
                data={data}
                numColumns={2}
                renderItem={({ item }) => <FavoriteListItem item={item} />}
                style={styles.scrollArea}
                contentContainerStyle={styles.scrollAreaContent}
                columnWrapperStyle={{ justifyContent: "space-between" }}
            />
        </View>
    );
}
