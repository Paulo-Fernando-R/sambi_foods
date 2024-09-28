import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import styles from "./countryTagsStyles";
import React, { useState } from "react";
import { FoodCountry } from "../../models/foodCategoty";
import { Code } from "react-content-loader/native";
import appColors from "../../styles/appColors";

type CountryTagsProps = {
    isLoading: boolean | undefined;
    list: FoodCountry[] | undefined;
};

type CountryTagsContentProps = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    list: FoodCountry[];
};

export default function CountryTags({ isLoading, list }: CountryTagsProps) {
    const [isOpen, setIsOpen] = useState(false);

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

            {isOpen ? <Opened setIsOpen={setIsOpen} list={list} /> : <Closed setIsOpen={setIsOpen} list={list} />}
        </View>
    );
}

function Closed({ setIsOpen, list }: CountryTagsContentProps) {
    const smalList = list.slice(0, Math.floor(list.length / 2));

    return (
        <View>
            <View style={styles.listContainer}>
                {smalList.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} activeOpacity={0.8}>
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

function Opened({ setIsOpen, list }: CountryTagsContentProps) {
    return (
        <View>
            <View style={styles.listContainer}>
                {list.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} activeOpacity={0.8}>
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
