import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./favoriteListItemStyles";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import appColors from "../../styles/appColors";
import FavoriteItemAdapter from "../../models/favoriteItemAdapter";
import ContentLoader, { Rect } from "react-content-loader/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootTabsParamList } from "../../types/navigationTypes";

type FavoriteListItem = {
    item: FavoriteItemAdapter | undefined;
    navigation?: BottomTabNavigationProp<RootTabsParamList, "Favorite", undefined>;
};

export default function FavoriteListItem({ item, navigation }: FavoriteListItem) {
    function navigate() {
        if (item?.type === "drink") {
            navigation?.navigate("Drinks", {
                screen: "DrinksDetails",
                params: { id: parseInt(item.id), name: item.name },
            });
        } else if (item?.type === "food") {
            navigation?.navigate("Foods", {
                screen: "FoodsDetails",
                params: { id: parseInt(item.id), name: item.name },
            });
        }
    }

    if (!item) {
        return (
            <View style={styles.placeholder}>
                <ContentLoader
                    backgroundColor={appColors.textMediumLight}
                    foregroundColor={appColors.skeletonForeground}
                >
                    <Rect x="0" y="0" rx="4" ry="4" width="100%" height="300" />
                </ContentLoader>
            </View>
        );
    }
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.itemBox} onPress={navigate}>
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
        </TouchableOpacity>
    );
}
