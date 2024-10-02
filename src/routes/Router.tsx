import CustomTabNavigation from "../components/customTabNavigation/CustomTabNavigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useAuthContext } from "../context/authContext";
import appColors from "../styles/appColors";
import Login from "../screens/login/Login";
import FoodsRouter from "./FoodsRouter";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function AuthRouter() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                {}
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
                <Tab.Screen name="Foods" component={FoodsRouter} options={{ tabBarLabel: "Comidas" }} />
                <Tab.Screen name="Test2" component={FoodsRouter} options={{ tabBarLabel: "Bebidas" }} />
                <Tab.Screen name="Test3" component={FoodsRouter} options={{ tabBarLabel: "Favoritas" }} />
                <Tab.Screen name="Test4" component={FoodsRouter} options={{ tabBarLabel: "Usuário" }} />
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
