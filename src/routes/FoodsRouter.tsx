import { createStackNavigator } from "@react-navigation/stack";
import Foods from "../screens/foods/Foods";
import Search from "../screens/search/Search";
import Details from "../screens/details/Details";
import Coock from "../screens/cook/Coock";

import { FoodsRouterParamList } from "../types/navigationTypes";

const Stack = createStackNavigator<FoodsRouterParamList>();

export default function FoodsRouter() {
    return (
        <Stack.Navigator initialRouteName="FoodsHome" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="FoodsHome" component={Foods} />
            <Stack.Screen name="FoodsSearch" component={Search} initialParams={{ query: undefined }} />
            <Stack.Screen name="FoodsDetails" component={Details} initialParams={{ id: undefined, name: undefined }} />
            <Stack.Screen name="FoodsCook" component={Coock} initialParams={{ recipe: undefined }} />
        </Stack.Navigator>
    );
}
