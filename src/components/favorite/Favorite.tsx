import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useMutation } from "@tanstack/react-query";
import { TouchableOpacity } from "react-native";
import appColors from "../../styles/appColors";
import React, { useState } from "react";

type FavoriteProps = {
    add: () => Promise<void>;
    remove: () => Promise<void>;
};

export default function Favorite({ add, remove }: FavoriteProps) {
    const [isFav, setIsFav] = useState(false);
    const handleFav = () => {
        setIsFav(!isFav);
        if (isFav) {
            mutation.mutate(remove);
            return;
        }
        mutation.mutate(add);
    };

    const mutation = useMutation({
        mutationFn: (action: () => Promise<void>) => action(),
    });

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
