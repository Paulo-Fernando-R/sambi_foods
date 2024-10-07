import {
    GoogleSignin,
    isErrorWithCode,
    isSuccessResponse,
    statusCodes,
    SignInSuccessResponse,
    User,
} from "@react-native-google-signin/google-signin";
import * as SecureStore from "expo-secure-store";
import IauthService from "./IauthService";

export default class AuthService implements IauthService {
    private readonly key: string;

    constructor() {
        this.key = "user";
    }

    async signIn(): Promise<SignInSuccessResponse | undefined> {
        const aux: User = {
            idToken: null,
            scopes: [],
            serverAuthCode: null,
            user: {
                email: "pfr987@gmail.com",
                familyName: "Perez",
                givenName: "Fernando",
                id: "123456789",
                name: "Fernando Perez",
                photo: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
            },
        };

        this.save(aux);

        return {
            type: "success",
            data: aux,
        };

        GoogleSignin.configure();

        try {
            await GoogleSignin.hasPlayServices();
            const response = await GoogleSignin.signIn();
            if (isSuccessResponse(response)) {
                this.save(response.data);
                console.log(response);

                return response;
            } else {
                throw new Error("canceled");
                // sign in was cancelled by user
            }
        } catch (error) {
            if (isErrorWithCode(error)) {
                console.log(error);
                switch (error.code) {
                    case statusCodes.IN_PROGRESS:
                        // operation (eg. sign in) already in progress
                        break;
                    case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                        // Android only, play services not available or outdated
                        break;
                    default:
                        // some other error happened
                        throw error;
                }
            } else {
                // an error that's not related to google sign in occurred
                throw error;
            }
        }
    }

    async deleteItem(): Promise<void> {
        SecureStore.deleteItemAsync(this.key);
    }

    save(user: User) {
        SecureStore.setItem(this.key, JSON.stringify(user));
    }

    getItem(): User | null {
        const res = SecureStore.getItem(this.key);

        if (!res) {
            return null;
        }

        return JSON.parse(res!);
    }
}
