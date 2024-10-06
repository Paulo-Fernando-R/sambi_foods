import CustomTabNavigation from "../components/customTabNavigation/CustomTabNavigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useAuthContext } from "../context/authContext";
import appColors from "../styles/appColors";
import Login from "../screens/login/Login";
import FoodsRouter from "./FoodsRouter";
import DrinksRouter from "./DrinksRouter";
import Favorite from "../screens/favorite/Favorite";
import { RootTabsParamList } from "../types/navigationTypes";
import User from "../screens/user/User";

const Tab = createBottomTabNavigator<RootTabsParamList>();
const Stack = createStackNavigator();

function AuthRouter() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function AppRouter() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBar={CustomTabNavigation}
                screenOptions={{
                    headerShown: false,
                    tabBarHideOnKeyboard: true,
                }}
                initialRouteName="Foods"
                sceneContainerStyle={{ backgroundColor: appColors.bgLight }}
            >
                <Tab.Screen name="Foods" component={FoodsRouter} options={{ tabBarLabel: "Foods" }} />
                <Tab.Screen name="Drinks" component={DrinksRouter} options={{ tabBarLabel: "Drinks" }} />
                <Tab.Screen name="Favorite" component={Favorite} options={{ tabBarLabel: "Favorite" }} />
                <Tab.Screen name="User" component={User} options={{ tabBarLabel: "User" }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default function Router() {
    const { user } = useAuthContext();

    if (user) {
        return <AppRouter />;
    }
    return <AuthRouter />;
}
