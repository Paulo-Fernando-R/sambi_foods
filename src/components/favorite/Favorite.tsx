import React, { useState } from "react";
import styles from "./favoriteStyles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native";
import appColors from "../../services/appColors";
export default function Favorite() {
    const [isFav, setIsFav] = useState(false);
    const handleFav = () => {
        setIsFav(!isFav);
    };
    return (
        <TouchableOpacity onPress={handleFav} activeOpacity={0.8}>
            {isFav ? (
                <MaterialIcons name="favorite" size={32} color={appColors.primaryLight} />
            ) : (
                <MaterialIcons name="favorite-border" size={32} color={appColors.primaryLight} />
            )}
        </TouchableOpacity>
    );
}
