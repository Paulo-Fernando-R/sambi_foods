import { View, Image, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import styles from "./userStyles";

import React from "react";

export default function User() {
    return (
        <View>
            <Text>User</Text>
            <View>
                <Image />
                <View>
                    <Text>Jane Smith</Text>
                    <Text>jane.smith@gmailk.com</Text>
                </View>
            </View>
            <TouchableOpacity>
                <Text>Log out</Text>
            </TouchableOpacity>
            <View>
                <Image />
                <Text>Sambi FOODS</Text>
            </View>

            <View>
                <TouchableHighlight>
                    <Text>Github: https://github/exemplo</Text>
                </TouchableHighlight>

                <TouchableHighlight>
                    <Text>LinkedIn: https://linkedin/exempllo</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}
