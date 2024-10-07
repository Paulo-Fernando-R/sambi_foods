import { View, Image, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import AuthService from "../../services/authService/authService";
import { useAuthContext } from "../../context/authContext";
//@ts-ignore
import icon from "../../../assets/images/icon.png";
import appColors from "../../styles/appColors";
import * as Linking from "expo-linking";
import styles from "./userStyles";
import React from "react";

export default function User() {
    const context = useAuthContext();
    const auth = new AuthService();
    function github() {
        Linking.openURL("https://github.com/Paulo-Fernando-R/sambi_foods");
    }

    function linkedin() {
        Linking.openURL("https://www.linkedin.com/in/paulo-fernando-071bb31a9/");
    }

    function signOut() {
        auth.deleteItem();
        //@ts-ignore
        context.setUser(null);
    }

    return (
        <View style={styles.screenContainer}>
            <Text style={styles.title}>User</Text>
            <View style={styles.userInfo}>
                <Image style={styles.image} src={context.user?.user.photo!} />
                <View style={styles.name}>
                    <Text style={styles.nameText}>{context.user?.user.name}</Text>
                    <Text style={styles.emailText}>{context.user?.user.email}</Text>
                </View>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.Button} onPress={signOut}>
                <Text style={styles.bttonText}>Log out</Text>
            </TouchableOpacity>
            <View style={styles.bodyBox}>
                <Image style={styles.icon} source={icon} />
                <Text style={styles.iconText}>Sambi FOODS</Text>
            </View>

            <View style={styles.linkBox}>
                <TouchableHighlight onPress={github} underlayColor={appColors.bgIcon}>
                    <Text style={styles.linkText}>Github: https://github.com/Paulo-Fernando-R/sambi_foods</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={linkedin} underlayColor={appColors.bgIcon}>
                    <Text style={styles.linkText}>LinkedIn: https://www.linkedin.com/in/paulo-fernando-071bb31a9/</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}
