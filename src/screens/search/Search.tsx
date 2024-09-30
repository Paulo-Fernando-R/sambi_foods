import { View, Text, FlatList, Image, TouchableOpacity, Dimensions } from "react-native";
import styles from "./searchStyles";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import appColors from "../../styles/appColors";
import Header from "../../components/header/Header";
import { FoodsNavigationProp, FoodsSearchRouteProp } from "../../types/navigationTypes";
import { useQuery } from "@tanstack/react-query";
import SearchController from "./searchController";
import ContentLoader, { Rect } from "react-content-loader/native";
import Food from "../../models/food";

type SearchProps = {
    navigation: FoodsNavigationProp;
    route: FoodsSearchRouteProp;
};
type SearchItemProps = {
    data: Food;
};

export default function Search({ navigation, route }: SearchProps) {
    const controller = new SearchController();
    const { query, type } = route.params;

    function goBack() {
        navigation.goBack();
    }

    const { data, isLoading, isError } = useQuery({
        queryKey: ["search" + query + type],
        queryFn: () => controller.SearchRecipes(query, type),
    });

    return (
        <View style={styles.searchContainer}>
            <Header goBack={goBack} title={query} />

            {isLoading || !data ? (
                <FlatList
                    data={controller.placeholderData}
                    contentContainerStyle={styles.listConatiner}
                    renderItem={() => {
                        return <SearchItemSkeleton />;
                    }}
                />
            ) : (
                <FlatList
                    data={data}
                    contentContainerStyle={styles.listConatiner}
                    renderItem={(item) => {
                        return <SearchItem data={item.item} />;
                    }}
                />
            )}
        </View>
    );
}

function SearchItem({ data }: SearchItemProps) {
    const controller = new SearchController();
    let tags = controller.tagsHandler(data?.strTags);

    return (
        <TouchableOpacity style={styles.searchItemContainer} activeOpacity={0.8}>
            <View style={styles.itemTextConatiner}>
                <View style={styles.itemTestTagContainer}>
                    {tags && (
                        <>
                            <FontAwesome5 name="hashtag" size={12} color={appColors.primary} />
                            <Text style={styles.itemTextTag}>{tags}</Text>
                        </>
                    )}
                </View>
                <Text style={styles.itemTextTitle}>{data.strMeal}</Text>
                <Text style={styles.itemTextArea}>{data.strArea ?? ""}</Text>
            </View>
            <Image style={styles.image} src={data.strMealThumb} />
        </TouchableOpacity>
    );
}

function SearchItemSkeleton() {
    return (
        <View style={{ borderRadius: 20, overflow: "hidden" }}>
            <ContentLoader
                style={styles.listItemSkeleton}
                backgroundColor={appColors.textMediumLight}
                foregroundColor={appColors.skeletonForeground}
            >
                <Rect x={0} y={0} width={Dimensions.get("window").width} height={120} />
            </ContentLoader>
        </View>
    );
}
