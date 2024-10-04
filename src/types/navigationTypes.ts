import type { StackNavigationProp } from "@react-navigation/stack";
import type { RouteProp } from "@react-navigation/native";
import SearchType from "../enums/searchType";
import Food from "../models/food";

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
    DrinksCook: undefined /* {
        recipe: Food;
    };*/;
};

export type DrinksNavigationProp = StackNavigationProp<DrinksRouterParamList, "DrinksHome">;
export type DrinksHomeRouteProp = RouteProp<DrinksRouterParamList, "DrinksHome">;
export type DrinksSearchRouteProp = RouteProp<DrinksRouterParamList, "DrinksSearch">;
export type DrinksDetailsRouteProp = RouteProp<DrinksRouterParamList, "DrinksDetails">;
export type DrinksCookRouteProp = RouteProp<DrinksRouterParamList, "DrinksCook">;
