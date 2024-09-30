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
