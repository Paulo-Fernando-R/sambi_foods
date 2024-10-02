import { createContext, useContext } from "react";
import { User } from "@react-native-google-signin/google-signin";

export type AuthContextContent = {
    user: User | null;
    setUser: (user: User) => void;
};

export const AuthContext = createContext<AuthContextContent>({
    user: null,
    setUser: () => {},
});

export const useAuthContext = () => useContext(AuthContext);
