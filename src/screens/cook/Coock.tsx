import styles from "./cookStyles";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../../components/header/Header";
import { WebView } from "react-native-webview";
import { ScrollView } from "react-native-gesture-handler";
import { FoodsCookRouteProp, FoodsNavigationProp, FoodsSearchRouteProp } from "../../types/navigationTypes";
import CookController from "./cookController";
import AntDesign from "@expo/vector-icons/AntDesign";
import appColors from "../../styles/appColors";
import * as Speech from "expo-speech";

type CookProps = {
    navigation: FoodsNavigationProp;
    route: FoodsCookRouteProp;
};

type IngredientItemProps = {
    name: string;
    measure: string;
};

type TalkItemProps = {
    text: string;
};

export default function Coock({ navigation, route }: CookProps) {
    const { recipe } = route.params;
    const controller = new CookController();
    const ingredients = controller.listIngredients(recipe);
    const measures = controller.listMeasures(recipe);
    const lines = controller.separateInstructions(recipe.strInstructions);

    function ytUrl(url: string) {
        const aux = url.replace("/watch?v=", "/embed/");

        return aux;
    }

    return (
        <View style={styles.cookContainer}>
            <Header goBack={() => navigation.goBack()} title="" />
            <Text style={styles.title}>Separe os ingredientes</Text>

            <FlatList
                contentContainerStyle={styles.ingredients}
                data={ingredients}
                horizontal={true}
                renderItem={({ index, item }) => <IngredientsItem name={item} measure={measures[index]} />}
            />
            <View style={styles.webViweWrapper}>
                <WebView
                    style={styles.webView}
                    useWebView2={true}
                    lis
                    source={{
                        uri: ytUrl(recipe.strYoutube ??''),
                    }}
                />
            </View>

            <ScrollView style={{ height: 300 }} contentContainerStyle={styles.talkList}>
                {lines.map((item, index) => (
                    <TalkItem text={item} key={index} />
                ))}
            </ScrollView>

            {/* <FlatList
                contentContainerStyle={styles.talkList}
                data={lines}
                renderItem={({ item }) => <TalkItem text={item} />}
            /> */}
        </View>
    );
}

function IngredientsItem({ measure, name }: IngredientItemProps) {
    const controller = new CookController();
    const img = controller.imageBaseUrl + name + ".png";

    return (
        <View style={styles.ingredientItem}>
            <Image style={styles.image} src={img} />
            <Text numberOfLines={2} style={styles.ingredientItemText1}>
                {name}
            </Text>
            <Text numberOfLines={2} style={styles.ingredientItemText2}>
                {measure}
            </Text>
        </View>
    );
}

function TalkItem({ text }: TalkItemProps) {
    function talk() {
        Speech.speak(text);
    }
    return (
        <View style={styles.talkItem}>
            <Text style={styles.talkText}>{text}</Text>
            <TouchableOpacity style={styles.talkButton} activeOpacity={0.8} onPress={talk}>
                <Text style={styles.talkButtonText}>Falar</Text>
                <AntDesign name="sound" size={20} color={appColors.textLight} />
            </TouchableOpacity>
        </View>
    );
}
