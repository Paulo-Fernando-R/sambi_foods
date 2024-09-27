import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import styles from "./countryTagsStyles";
import React, { useState } from "react";

const list = [
    {
        strArea: "American",
    },
    {
        strArea: "British",
    },
    {
        strArea: "Canadian",
    },
    {
        strArea: "Chinese",
    },
    {
        strArea: "Croatian",
    },
    {
        strArea: "Dutch",
    },
    {
        strArea: "Egyptian",
    },
    {
        strArea: "Filipino",
    },
    {
        strArea: "French",
    },
    {
        strArea: "Greek",
    },
    {
        strArea: "Indian",
    },
    {
        strArea: "Irish",
    },
    {
        strArea: "Italian",
    },
    {
        strArea: "Jamaican",
    },
    {
        strArea: "Japanese",
    },
    {
        strArea: "Kenyan",
    },
    {
        strArea: "Malaysian",
    },
    {
        strArea: "Mexican",
    },
    {
        strArea: "Moroccan",
    },
    {
        strArea: "Polish",
    },
    {
        strArea: "Portuguese",
    },
    {
        strArea: "Russian",
    },
    {
        strArea: "Spanish",
    },
    {
        strArea: "Thai",
    },
    {
        strArea: "Tunisian",
    },
    {
        strArea: "Turkish",
    },
    {
        strArea: "Ukrainian",
    },
    {
        strArea: "Unknown",
    },
    {
        strArea: "Vietnamese",
    },
];

type CountryTagsContentProps = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CountryTags() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Por país</Text>

            {isOpen ? <Opened setIsOpen={setIsOpen} /> : <Closed setIsOpen={setIsOpen} />}
        </View>
    );
}

function Closed({ setIsOpen }: CountryTagsContentProps) {
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

function Opened({ setIsOpen }: CountryTagsContentProps) {
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
