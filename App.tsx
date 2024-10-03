import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { User } from "@react-native-google-signin/google-signin";
import AuthService from "./src/services/authService/authService";
import { AuthContext } from "./src/context/authContext";
import { StatusBar } from "expo-status-bar";
import "./src/routes/gestureHandlerNative";
import Router from "./src/routes/Router";
import { useState } from "react";
import FirestorService from "./src/services/firestoreService/firestoreService";

const queryClient = new QueryClient();

export default function App() {
    const service = new AuthService();
    //  service.deleteItem()
    const data = service.getItem();

    const [user, setUser] = useState<User | null>(data);
    const changeState = (user: User) => setUser(user);



    async function teste() {
        const service = new FirestorService();
        // await service.getDocByUserId('')
        // await service.getCollection()

        //await service.getDocByProperty<User>('123456789', 'user', 'user.id', '==');
    }

    teste();

    return (
        <QueryClientProvider client={queryClient}>
            <AuthContext.Provider value={{ user, setUser: changeState }}>
                <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" />
                <Router />
            </AuthContext.Provider>
        </QueryClientProvider>
    );
}
