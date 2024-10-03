import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { User } from "@react-native-google-signin/google-signin";
import AuthService from "./src/services/authService/authService";
import { AuthContext } from "./src/context/authContext";
import { StatusBar } from "expo-status-bar";
import "./src/routes/gestureHandlerNative";
import Router from "./src/routes/Router";
import { useState } from "react";

const queryClient = new QueryClient();

export default function App() {
    const service = new AuthService();
    const data = service.getItem();

    const [user, setUser] = useState<User | null>(data);
    const changeState = (user: User) => setUser(user);

    return (
        <QueryClientProvider client={queryClient}>
            <AuthContext.Provider value={{ user, setUser: changeState }}>
                <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" />
                <Router />
            </AuthContext.Provider>
        </QueryClientProvider>
    );
}
