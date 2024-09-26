import { ReactNode } from "react";
import styles from "./customTabNavigationStyles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationHelpers, ParamListBase, TabNavigationState } from "@react-navigation/native";
import {
    BottomTabDescriptorMap,
    BottomTabNavigationEventMap,
} from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import appColors from "../../services/appColors";

type CustomTabNavigationProps = {
    state: TabNavigationState<ParamListBase>;
    descriptors: BottomTabDescriptorMap;
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
};

type TabBarItemProps = {
    label: string;
    isFocused: boolean;
    tabBarAccessibilityLabel: string | undefined;
    tabBarTestID: string | undefined;
    onPress: () => void;
    onLongPress: () => void;
    children: ReactNode | undefined;
};

export default function CustomTabNavigation({ state, descriptors, navigation }: CustomTabNavigationProps) {
    const icons = [
        (color: string) => <MaterialIcons name="dinner-dining" size={28} color={color} />,
        (color: string) => <MaterialIcons name="local-bar" size={28} color={color} />,
        (color: string) => <MaterialIcons name="favorite-border" size={28} color={color} />,
        (color: string) => <MaterialIcons name="person-outline" size={28} color={color} />,
    ];

    return (
        <View style={styles.tabBarBox}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];

                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: "tabLongPress",
                        target: route.key,
                    });
                };

                return (
                    <TabBarItem
                        isFocused={isFocused}
                        label={label.toString()}
                        onLongPress={onLongPress}
                        onPress={onPress}
                        key={index}
                        tabBarAccessibilityLabel={options.tabBarAccessibilityLabel}
                        tabBarTestID={options.tabBarTestID}
                    >
                        {icons[index](isFocused ? appColors.primary : appColors.textMedium)}
                    </TabBarItem>
                );
            })}
        </View>
    );
}

function TabBarItem({
    label,
    isFocused,
    tabBarAccessibilityLabel,
    tabBarTestID,
    onPress,
    onLongPress,
    children,
}: TabBarItemProps) {
    const buttonStyle = isFocused ? styles.tabActive : styles.tabBarButton;

    return (
        <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={tabBarAccessibilityLabel}
            testID={tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={buttonStyle}
        >
            {children}
            {isFocused && <Text style={styles.tabBarTextAcive}>{label.toString()}</Text>}
        </TouchableOpacity>
    );
}
