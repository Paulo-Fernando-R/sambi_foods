import { createStackNavigator } from "@react-navigation/stack";
import Foods from "../screens/foods/Foods";
import Search from "../screens/search/Search";
import Details from "../screens/details/Details";
import Coock from "../screens/cook/Coock";
import Drinks from "../screens/drinks/Drinks";

import { FoodsRouterParamList, DrinksRouterParamList } from "../types/navigationTypes";

const Stack = createStackNavigator<DrinksRouterParamList>();

export default function DrinksRouter() {
    return (
        <Stack.Navigator initialRouteName="DrinksHome" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DrinksHome" component={Drinks} />
            <Stack.Screen name="DrinksSearch" component={Drinks} />
            <Stack.Screen name="DrinksDetails" component={Drinks} />
            <Stack.Screen name="DrinksCook" component={Drinks} />
        </Stack.Navigator>
    );
}
