import { createStackNavigator } from "@react-navigation/stack";
import Foods from "../screens/foods/Foods";
const Stack = createStackNavigator();
import Search from "../screens/search/Search";

export default function FoodsRouter() {
    return (
        <Stack.Navigator initialRouteName="FoodsSearch" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="FoodsHome" component={Foods} />
            <Stack.Screen name="FoodsSearch" component={Search} />
        </Stack.Navigator>
    );
}
