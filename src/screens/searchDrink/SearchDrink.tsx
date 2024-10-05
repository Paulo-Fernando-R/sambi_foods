import { View, Text, FlatList, Image, TouchableOpacity, Dimensions } from "react-native";
import { DrinksNavigationProp, DrinksSearchNavigationProp, DrinksSearchRouteProp } from "../../types/navigationTypes";
import ContentLoader, { Rect } from "react-content-loader/native";
import SearchDrinkController from "./searchDrinkController";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Header from "../../components/header/Header";
import { useQuery } from "@tanstack/react-query";
import appColors from "../../styles/appColors";
import styles from "./searchDrinkStyles";
import Drink from "../../models/drink";
import React from "react";

type SearchDrinkProps = {
    navigation: DrinksSearchNavigationProp;
    route: DrinksSearchRouteProp;
};
type SearchDrinkItemProps = {
    data: Drink;
    navigate(id: number | string, name: string): void;
};

export default function SearchDrink({ navigation, route }: SearchDrinkProps) {
    const controller = new SearchDrinkController();
    const { query, type } = route.params;

    function goBack() {
        navigation.goBack();
    }
    function navigate(id: number | string, name: string) {
        navigation.navigate("DrinksDetails", {
            id: Number.parseInt(id.toString()),
            name: name,
        });
    }

    const { data, isLoading, isError } = useQuery({
        queryKey: ["searchDrink" + query + type],
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
                        return <SearchItem data={item.item} navigate={navigate} />;
                    }}
                />
            )}
        </View>
    );
}

function SearchItem({ data, navigate }: SearchDrinkItemProps) {
    const controller = new SearchDrinkController();
    let tags = controller.tagsHandler(data?.strTags);

    return (
        <TouchableOpacity
            style={styles.searchItemContainer}
            activeOpacity={0.8}
            onPress={() => navigate(data.idDrink, data.strDrink)}
        >
            <View style={styles.itemTextConatiner}>
                <View style={styles.itemTestTagContainer}>
                    {tags && (
                        <>
                            <FontAwesome5 name="hashtag" size={12} color={appColors.primary} />
                            <Text style={styles.itemTextTag}>{tags}</Text>
                        </>
                    )}
                </View>
                <Text style={styles.itemTextTitle}>{data.strDrink}</Text>
                <Text style={styles.itemTextArea}>{data.strCategory ?? ""}</Text>
            </View>
            <Image style={styles.image} src={data.strDrinkThumb} />
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
