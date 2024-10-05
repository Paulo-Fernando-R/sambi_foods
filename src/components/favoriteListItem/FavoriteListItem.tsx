import { View, Text, Image, FlatList } from "react-native";
import styles from "./favoriteListItemStyles";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import appColors from "../../styles/appColors";
import FavoriteItemAdapter from "../../models/favoriteItemAdapter";

type FavoriteListItem = {
    item: FavoriteItemAdapter | undefined;
};

export default function FavoriteListItem({ item }: FavoriteListItem) {
    if (!item) return null;
    return (
        <View style={styles.itemBox}>
            <Image style={styles.image} src={item?.image} />

            <View style={styles.itemTestTagContainer}>
                {item.tag && (
                    <>
                        <FontAwesome5 name="hashtag" size={12} color={appColors.primary} />
                        <Text style={styles.itemTextTag}>{item.tag}</Text>
                    </>
                )}
            </View>
            <Text numberOfLines={2} style={styles.itemTitle}>
                {item?.name}
            </Text>
            <Text style={styles.itemSubTitle}>{item?.category}</Text>
        </View>
    );
}
