import './src/routes/gestureHandlerNative'
import Router from "./src/routes/Router";
import { StatusBar } from "expo-status-bar";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();
export default function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" />
            <Router />
        </QueryClientProvider>
    );
}
