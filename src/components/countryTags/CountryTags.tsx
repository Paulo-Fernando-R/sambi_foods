import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import styles from "./countryTagsStyles";
import React, { useState } from "react";
import { FoodCountry } from "../../models/foodCategoty";
import { Code } from "react-content-loader/native";
import appColors from "../../styles/appColors";
import { FoodsNavigationProp } from "../../types/navigationTypes";
import SearchType from "../../enums/searchType";

type CountryTagsProps = {
    isLoading: boolean | undefined;
    list: FoodCountry[] | undefined;
    navigation: FoodsNavigationProp;
};

type CountryTagsContentProps = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    list: FoodCountry[];
    navigate(tag: string): void;
};

export default function CountryTags({ isLoading, list, navigation }: CountryTagsProps) {
    const [isOpen, setIsOpen] = useState(false);

    function navigate(tag: string) {
        navigation.navigate("FoodsSearch", { query: tag, type:SearchType.area });
    }

    if (isLoading || !list) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Por país</Text>

                <CountryTagsSkeleton />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Por país</Text>

            {isOpen ? (
                <Opened setIsOpen={setIsOpen} list={list} navigate={navigate} />
            ) : (
                <Closed setIsOpen={setIsOpen} list={list} navigate={navigate} />
            )}
        </View>
    );
}

function Closed({ setIsOpen, list, navigate }: CountryTagsContentProps) {
    const smalList = list.slice(0, Math.floor(list.length / 2));

    return (
        <View>
            <View style={styles.listContainer}>
                {smalList.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => navigate(item.strArea)}>
                            <Text style={styles.listItem}>{item.strArea}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
            <TouchableHighlight onPress={() => setIsOpen(true)} underlayColor={""}>
                <Text style={styles.actionButton}>Ver mais</Text>
            </TouchableHighlight>
        </View>
    );
}

function Opened({ setIsOpen, list, navigate }: CountryTagsContentProps) {
    return (
        <View>
            <View style={styles.listContainer}>
                {list.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => navigate(item.strArea)}>
                            <Text style={styles.listItem}>{item.strArea}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
            <TouchableHighlight onPress={() => setIsOpen(false)} underlayColor={""}>
                <Text style={styles.actionButton}>Ver menos</Text>
            </TouchableHighlight>
        </View>
    );
}

function CountryTagsSkeleton() {
    return (
        <View style={styles.skeleton}>
            <Code backgroundColor={appColors.textMediumLight} foregroundColor={appColors.skeletonForeground} />
            <Code backgroundColor={appColors.textMediumLight} foregroundColor={appColors.skeletonForeground} />
        </View>
    );
}
