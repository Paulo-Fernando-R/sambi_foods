import React from "react";
// import statusCodes along with GoogleSignin
import {
    GoogleSignin,
    isErrorWithCode,
    isSuccessResponse,
    statusCodes,
    SignInSuccessResponse,
} from "@react-native-google-signin/google-signin";
import { Button, View, Image, Text, TouchableOpacity } from "react-native";
import icon from "../../../assets/images/icon.png";
import AntDesign from "@expo/vector-icons/AntDesign";
import styles from "./loginStyles";
import appColors from "../../styles/appColors";

// Somewhere in your code
const signIn = async (setState: React.Dispatch<React.SetStateAction<SignInSuccessResponse | undefined>>) => {
    GoogleSignin.configure();

    try {
        await GoogleSignin.hasPlayServices();
        const response = await GoogleSignin.signIn();
        if (isSuccessResponse(response)) {
            setState(response);
            console.log(response);
        } else {
            // sign in was cancelled by user
        }
    } catch (error) {
        if (isErrorWithCode(error)) {
            console.log(error)
            switch (error.code) {
                case statusCodes.IN_PROGRESS:
                    // operation (eg. sign in) already in progress
                    break;
                case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                    // Android only, play services not available or outdated
                    break;
                default:
                // some other error happened
            }
        } else {
            // an error that's not related to google sign in occurred
        }
    }
};

export default function Login() {
    const [userInfo, setUserInfo] = React.useState<SignInSuccessResponse>();
    return (
        <View style={styles.loginContainer}>
            <View style={styles.logoBox}>
                <Image style={styles.logo} source={icon} />
                <Text style={styles.subtitle}>Bem vindo ao</Text>
                <Text style={styles.title}>SAMBI Foods</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Faça login com sua conta Google</Text>
                <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => signIn(setUserInfo)}>
                    <AntDesign name="google" size={20} color={appColors.textLight} />
                    <Text style={styles.buttonTitle}>LOGIN</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bottom}>
                <Text style={styles.bottomText}>Encontre as melhores receitas aqui</Text>
            </View>
        </View>
    );
}
