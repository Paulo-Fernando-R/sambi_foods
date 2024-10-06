import FavoriteScreenFilter from "../../components/favoriteScreenFilter/FavoriteScreenFilter";
import FavoriteListItem from "../../components/favoriteListItem/FavoriteListItem";
import { RootTabsFavoriteNavigationProp } from "../../types/navigationTypes";
import FavoriteFilterEnum from "../../enums/favoriteFilterEnum";
import FavoriteController from "./favoriteController";
import { View, Text, FlatList } from "react-native";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import styles from "./favoriteStyles";
import { useIsFocused } from "@react-navigation/native";

export default function Favorite({ navigation }: RootTabsFavoriteNavigationProp) {
    const controller = new FavoriteController();
    const [active, setActive] = useState(FavoriteFilterEnum.all);

    const handleFilterClick = (filter: FavoriteFilterEnum) => {
        setActive(filter);
    };
    const { data, refetch } = useQuery({
        queryKey: ["favorite"],
        queryFn: () => controller.getFavorites(),
    });

    const isFocused = useIsFocused();

    if (isFocused) refetch();

    return (
        <View style={styles.screenContainer}>
            <Text style={styles.title}>Favorites</Text>
            <FavoriteScreenFilter active={active} handleFilterClick={handleFilterClick} />
            {data ? (
                <FlatList
                    data={controller.filterData(active, data)}
                    numColumns={2}
                    renderItem={({ item }) => <FavoriteListItem item={item} navigation={navigation} />}
                    style={styles.scrollArea}
                    contentContainerStyle={styles.scrollAreaContent}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                />
            ) : (
                <FlatList
                    data={controller.placeholderData}
                    numColumns={2}
                    renderItem={({ item }) => <FavoriteListItem item={item} />}
                    style={styles.scrollArea}
                    contentContainerStyle={styles.scrollAreaContent}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                />
            )}
        </View>
    );
}
