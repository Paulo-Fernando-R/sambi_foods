import styles from "./cookStyles";
import { View, Text } from "react-native";
import React from "react";
import Header from "../../components/header/Header";
import { WebView } from "react-native-webview";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Coock() {
    return (
        <View style={styles.DetailsContainer}>
            <Header goBack={() => {}} title="" />
            <View style={styles.webViweWrapper}>
                <WebView
                    style={styles.webView}
                    useWebView2={true}
                    lis
                    source={{
                        uri: 'https://www.youtube.com/embed/OE92fdxPBXo'
                    }}
                />
            </View>
        </View>
    );
}

