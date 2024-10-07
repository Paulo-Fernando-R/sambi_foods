import { FoodsCookRouteProp, FoodsNavigationProp } from "../../types/navigationTypes";
import IngredientsList from "../../components/ingredientsList/IngredientsList";
import InstructionList from "../../components/instructionsList/InstructionList";
import Header from "../../components/header/Header";
import { WebView } from "react-native-webview";
import CookController from "./cookController";
import { View, Text } from "react-native";
import styles from "./cookStyles";
import React from "react";

type CookProps = {
    navigation: FoodsNavigationProp;
    route: FoodsCookRouteProp;
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

            <Text style={styles.title}>Separate the ingredients</Text>

            <IngredientsList imgUrl={controller.imageBaseUrl} ingredients={ingredients} measures={measures} />

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

            <InstructionList lines={lines} />
        </View>
    );
}
