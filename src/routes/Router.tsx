import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import CustomTabNavigation from "../components/customTabNavigation/CustomTabNavigation";
import appColors from "../styles/appColors";
import FoodsRouter from "./FoodsRouter";
import Login from "../screens/login/Login";

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
                <Tab.Screen name="Test2" component={Test2} options={{ tabBarLabel: "Bebidas" }} />
                <Tab.Screen name="Test3" component={Test3} options={{ tabBarLabel: "Favoritas" }} />
                <Tab.Screen name="Test4" component={Test4} options={{ tabBarLabel: "Usuário" }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default function Router() {
    const isAuth = false;

    if (isAuth) {
        return <AppRouter />;
    }
    return <AuthRouter />;
}

function Test() {
    return (
        <View>
            <Text>Open up App.tsx to start working on your app!</Text>
        </View>
    );
}

function Test1() {
    return (
        <View>
            <Text>Open up App.tsx to start working on your app!</Text>
        </View>
    );
}

function Test2() {
    return (
        <View>
            <Text>Open up App.tsx to start working on your app!</Text>
        </View>
    );
}

function Test3() {
    return (
        <View>
            <Text>Open up App.tsx to start working on your app!</Text>
        </View>
    );
}

function Test4() {
    return (
        <View>
            <Text>Open up App.tsx to start working on your app!</Text>
        </View>
    );
}
