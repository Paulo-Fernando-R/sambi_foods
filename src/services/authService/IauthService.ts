import { SignInSuccessResponse, User } from "@react-native-google-signin/google-signin";

export default interface IauthService {
    save(user: User): void;

    getItem(): User | null;

    deleteItem(): Promise<void>;

    signIn(): Promise<SignInSuccessResponse | undefined>;
    /*setState: React.Dispatch<React.SetStateAction<SignInSuccessResponse | undefined>>*/
}
