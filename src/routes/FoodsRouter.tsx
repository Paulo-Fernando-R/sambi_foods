import { createStackNavigator } from "@react-navigation/stack";
import Foods from "../screens/foods/Foods";
const Stack = createStackNavigator();
import Search from "../screens/search/Search";
import Details from "../screens/details/Details";

export default function FoodsRouter() {
    return (
        <Stack.Navigator initialRouteName="FoodsHome" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="FoodsHome" component={Foods} />
            <Stack.Screen name="FoodsSearch" component={Search} />
            <Stack.Screen name="FoodsDetails" component={Details} />
        </Stack.Navigator>
    );
}
