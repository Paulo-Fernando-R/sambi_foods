import { View, Text, FlatList } from "react-native";
import styles from "./favoriteStyles";
import React from "react";
import { RootTabsFavoriteNavigationProp } from "../../types/navigationTypes";
import FavoriteScreenFilter from "../../components/favoriteScreenFilter/FavoriteScreenFilter";
import FavoriteListItem from "../../components/favoriteListItem/FavoriteListItem";
export default function Favorite({ navigation }: RootTabsFavoriteNavigationProp) {
    const list = [1, 2, 3, 4, 5, 6];
    return (
        <View style={styles.screenContainer}>
            <Text style={styles.title}>Favorites</Text>
            <FavoriteScreenFilter />
            <FlatList
                data={list}
                numColumns={2}
                renderItem={() => <FavoriteListItem />}
                style={styles.scrollArea}
                contentContainerStyle={styles.scrollAreaContent}
                columnWrapperStyle={{ justifyContent: "space-between" }}
            />
        </View>
    );
}
