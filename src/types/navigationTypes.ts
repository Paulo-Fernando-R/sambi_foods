import type { StackNavigationProp } from "@react-navigation/stack";
import type { RouteProp } from "@react-navigation/native";

export type FoodsRouterParamList = {
    FoodsHome: undefined;
    FoodsSearch: {
        query: string;
    };
    FoodsDetails: undefined;
};

export type FoodsNavigationProp = StackNavigationProp<FoodsRouterParamList, "FoodsHome">;
export type FoodsRouteProp = RouteProp<FoodsRouterParamList, "FoodsHome">;
