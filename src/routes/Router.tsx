import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import CustomTabNavigation from "../components/customTabNavigation/CustomTabNavigation";
import appColors from "../services/appColors";
import FoodsRouter from "./FoodsRouter";
import Foods from "../screens/foods/Foods";

const Tab = createBottomTabNavigator();

export default function Router() {
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
