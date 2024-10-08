import type { StackNavigationProp } from "@react-navigation/stack";
import type { NavigatorScreenParams, RouteProp } from "@react-navigation/native";
import SearchType from "../enums/searchType";
import Food from "../models/food";
import Drink from "../models/drink";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

//? Root Router
export type RootTabsParamList = {
    Foods: NavigatorScreenParams<FoodsRouterParamList>;
    Drinks: NavigatorScreenParams<DrinksRouterParamList>;
    Favorite: undefined;
    User: undefined;
};

export type RootTabsFavoriteNavigationProp = BottomTabScreenProps<RootTabsParamList, "Favorite">;


//? Food Router
export type FoodsRouterParamList = {
    FoodsHome: undefined;
    FoodsSearch: {
        query: string;
        type: SearchType;
    };
    FoodsDetails: {
        id: number;
        name: string;
    };
    FoodsCook: {
        recipe: Food;
    };
};

export type FoodsNavigationProp = StackNavigationProp<FoodsRouterParamList, "FoodsHome">;
export type FoodsHomeRouteProp = RouteProp<FoodsRouterParamList, "FoodsHome">;
export type FoodsSearchRouteProp = RouteProp<FoodsRouterParamList, "FoodsSearch">;
export type FoodsDetailsRouteProp = RouteProp<FoodsRouterParamList, "FoodsDetails">;
export type FoodsCookRouteProp = RouteProp<FoodsRouterParamList, "FoodsCook">;



//? DrinkRouter
export type DrinksRouterParamList = {
    DrinksHome: undefined;
    DrinksSearch: {
        query: string;
        type: SearchType;
    };
    DrinksDetails: {
        id: number;
        name: string;
    };
    DrinksCook: {
        recipe: Drink;
    };
};

export type DrinksNavigationProp = StackNavigationProp<DrinksRouterParamList, "DrinksHome">;
export type DrinksSearchNavigationProp = StackNavigationProp<DrinksRouterParamList, "DrinksSearch">;
export type DrinksDetailsNavigationProp = StackNavigationProp<DrinksRouterParamList, "DrinksDetails">;
export type DrinksCookNavigationProp = StackNavigationProp<DrinksRouterParamList, "DrinksCook">;


export type DrinksHomeRouteProp = RouteProp<DrinksRouterParamList, "DrinksHome">;
export type DrinksSearchRouteProp = RouteProp<DrinksRouterParamList, "DrinksSearch">;
export type DrinksDetailsRouteProp = RouteProp<DrinksRouterParamList, "DrinksDetails">;
export type DrinksCookRouteProp = RouteProp<DrinksRouterParamList, "DrinksCook">;
