import { View, Text, Image, FlatList } from "react-native";
import styles from "./favoriteStyles";
import React from "react";
import { RootTabsFavoriteNavigationProp } from "../../types/navigationTypes";
import FavoriteScreenFilter from "../../components/favoriteScreenFilter/FavoriteScreenFilter";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import appColors from "../../styles/appColors";
export default function Favorite({ navigation }: RootTabsFavoriteNavigationProp) {
    const list = [1, 2, 3, 4, 5, 6];
    return (
        <View style={styles.screenContainer}>
            <Text style={styles.title}>Favorites</Text>
            <FavoriteScreenFilter />
            <FlatList
                data={list}
                numColumns={2}
                renderItem={() => <FavoriteItem />}
                style={styles.scrollArea}
                contentContainerStyle={styles.scrollAreaContent}
                columnWrapperStyle={{ justifyContent: "space-between" }}
            />
        </View>
    );
}

function FavoriteItem() {
    return (
        <View style={styles.itemBox}>
            <Image style={styles.image} src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" />
            <Text style={styles.tag}><FontAwesome5 name="hashtag" size={12} color={appColors.textMedium} /> Vegetarian</Text>
            <Text numberOfLines={2} style={styles.itemTitle}>Price</Text>
            <Text style={styles.itemSubTitle}>Rating</Text>
        </View>
    );
}
