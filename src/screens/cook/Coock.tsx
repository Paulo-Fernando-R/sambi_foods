import styles from "./cookStyles";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../../components/header/Header";
import { WebView } from "react-native-webview";
import { ScrollView } from "react-native-gesture-handler";
import { FoodsCookRouteProp, FoodsNavigationProp } from "../../types/navigationTypes";
import CookController from "./cookController";
import Foundation from "@expo/vector-icons/Foundation";
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
    const ytUrl = controller.handleYtUrl(recipe.strYoutube ?? "");

    return (
        <View style={styles.cookContainer}>
            <View style={styles.titleWrapper}>
                <Header goBack={() => navigation.goBack()} title={recipe.strMeal} />
            </View>

            <Text style={styles.title}>Separe os ingredientes</Text>

            <FlatList
                contentContainerStyle={styles.ingredients}
                data={ingredients}
                horizontal={true}
                renderItem={({ index, item }) => <IngredientsItem name={item} measure={measures[index]} />}
            />
            {ytUrl && (
                <View style={styles.webViweWrapper}>
                    <WebView
                        style={styles.webView}
                        useWebView2={true}
                        lis
                        source={{
                            uri: ytUrl,
                        }}
                    />
                </View>
            )}

            <ScrollView style={{ height: 300 }} contentContainerStyle={styles.talkList}>
                {lines.map((item, index) => (
                    <TalkItem text={item} key={index} />
                ))}
            </ScrollView>
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
                <Foundation name="sound" size={20} color={appColors.textLight} />
            </TouchableOpacity>
        </View>
    );
}
