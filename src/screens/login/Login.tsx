import { View, Image, Text, TouchableOpacity } from "react-native";
import AuthService from "../../services/authService/authService";
import { useAuthContext } from "../../context/authContext";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useMutation } from "@tanstack/react-query";
//@ts-ignore
import icon from "../../../assets/images/icon.png";
import appColors from "../../styles/appColors";
import styles from "./loginStyles";
import React from "react";

export default function Login() {
    const authService = new AuthService();
    const { setUser, user } = useAuthContext();

    const mutation = useMutation({
        mutationKey: ["login"],
        mutationFn: () => authService.signIn(),
    });

    if (mutation.data) {
        setUser(mutation.data.data);
    }

    return (
        <View style={styles.loginContainer}>
            <View style={styles.logoBox}>
                <Image style={styles.logo} source={icon} />
                <Text style={styles.subtitle}>Bem vindo ao</Text>
                <Text style={styles.title}>SAMBI Foods</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Faça login com sua conta Google</Text>
                <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => mutation.mutate()}>
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
