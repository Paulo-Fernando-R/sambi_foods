import { DrinksRouterParamList } from "../types/navigationTypes";
import { createStackNavigator } from "@react-navigation/stack";
import Drinks from "../screens/drinks/Drinks";
import SearchDrink from "../screens/searchDrink/SearchDrink";
import DrinkDetails from "../screens/drinkDetails/DrinkDetails";
import DrinkCook from "../screens/drinkCook/DrinkCoock";

const Stack = createStackNavigator<DrinksRouterParamList>();

export default function DrinksRouter() {
    return (
        <Stack.Navigator id="DrinkRouter" initialRouteName="DrinksHome" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DrinksHome" component={Drinks} />
            <Stack.Screen
                name="DrinksSearch"
                component={SearchDrink}
                initialParams={{ query: undefined, type: undefined }}
            />
            <Stack.Screen name="DrinksDetails" component={DrinkDetails} />
            <Stack.Screen name="DrinksCook" component={DrinkCook} />
        </Stack.Navigator>
    );
}
