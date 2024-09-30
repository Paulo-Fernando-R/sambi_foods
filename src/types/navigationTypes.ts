import type { StackNavigationProp } from "@react-navigation/stack";
import type { RouteProp } from "@react-navigation/native";
import SearchType from "../enums/searchType";

export type FoodsRouterParamList = {
    FoodsHome: undefined;
    FoodsSearch: {
        query: string;
        type: SearchType;
    };
    FoodsDetails: undefined;
};

export type FoodsNavigationProp = StackNavigationProp<FoodsRouterParamList, "FoodsHome">;
export type FoodsHomeRouteProp = RouteProp<FoodsRouterParamList, "FoodsHome">;
export type FoodsSearchRouteProp = RouteProp<FoodsRouterParamList, "FoodsSearch">;
