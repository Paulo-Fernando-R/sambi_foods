import IfirestoreService from "../services/firestoreService/IfirestoreService";
import FirestoreService from "../services/firestoreService/firestoreService";
import IauthService from "../services/authService/IauthService";
import AuthService from "../services/authService/authService";
import axiosInstance from "../services/customAxiosClient";
import DrinkIngredient from "../models/drinkIngredient";
import DrinkCategory from "../models/drinkCategory";
import IDrinkRepository from "./IDrinkRepository";
import DrinkByUser from "../models/drinkByUser";
import RecipeType from "../enums/recipeType";
import { AxiosInstance } from "axios";
import Drink from "../models/drink";

export default class DrinkRepository implements IDrinkRepository {
    private axios: AxiosInstance;
    private readonly favoriteCollection: string;
    private firestore: IfirestoreService;
    private authService: IauthService;

    constructor() {
        this.axios = axiosInstance(RecipeType.drink);
        this.favoriteCollection = "FavoriteDrinkCollection";
        this.firestore = new FirestoreService();
        this.authService = new AuthService();
    }
    async getFavoriteDrink(): Promise<{ data: DrinkByUser; id: string }[]> {
        const auth = this.authService.getItem();
        if (!auth) {
            throw new Error("Invalid user credentials");
        }

        const id = auth.user.id;
        const collection = `${this.favoriteCollection}_${id}`;

        const fireRes = await this.firestore.getCollection<DrinkByUser>(collection);

        const list = fireRes.map((e) => {
            const aux = {
                data: {
                    drink: e.data.drink,
                    user: e.data.user,
                },
                id: e.id,
            };

            return aux;
        });

        return list;
    }

    async verifyIsDrinkFavorite(drink: Drink): Promise<boolean> {
        const auth = this.authService.getItem();
        if (!auth) {
            throw new Error("Invalid user credentials");
        }

        const id = auth.user.id;
        const collection = `${this.favoriteCollection}_${id}`;
        const res = await this.firestore.getDocByProperty<DrinkByUser>(
            drink.idDrink,
            collection,
            "drink.idDrink",
            "=="
        );

        if (res.length > 0) {
            return true;
        }

        return false;
    }

    async removeFavoriteDrink(drink: Drink): Promise<void> {
        const auth = this.authService.getItem();
        if (!auth) {
            throw new Error("Invalid user credentials");
        }

        const id = auth.user.id;
        const collection = `${this.favoriteCollection}_${id}`;

        const doc = await this.firestore.getDocByProperty<Drink>(drink.idDrink, collection, "drink.idDrink", "==");

        await this.firestore.removeDoc(doc[0].id, collection);
    }

    async favoriteDrink(drink: Drink): Promise<void> {
        const auth = this.authService.getItem();
        if (!auth) {
            throw new Error("Invalid user credentials");
        }

        const id = auth.user.id;
        const collection = `${this.favoriteCollection}_${id}`;
        const body: DrinkByUser = {
            user: id,
            drink: drink,
        };
        await this.firestore.addnewDoc<DrinkByUser>(body, collection);
    }

    async getCategories(): Promise<DrinkCategory[]> {
        //
        const response = await this.axios.get("list.php?c=list");
        if (!response) {
            throw new Error("internal server error", { cause: "500" });
        }

        if (response.status !== 200) {
            throw new Error(response.statusText, { cause: response.status });
        }

        const data = response.data.drinks as DrinkCategory[];
        return data;
    }

    async getIngredients(): Promise<DrinkIngredient[]> {
        const response = await this.axios.get("/list.php?i=list");

        if (!response) {
            throw new Error("internal server error", { cause: "500" });
        }

        if (response.status !== 200) {
            throw new Error(response.statusText, { cause: response.status });
        }

        const data = response.data.drinks as DrinkIngredient[];
        data.forEach((e) => {
            e.image = `https://www.thecocktaildb.com/images/ingredients/${e.strIngredient1}.png`;
        });
        return data;
    }

    async searchByName(query: string): Promise<Drink[]> {
        const response = await this.axios.get("search.php?s=" + query);

        if (!response) {
            throw new Error("internal server error", { cause: "500" });
        }

        if (response.status !== 200) {
            throw new Error(response.statusText, { cause: response.status });
        }

        const data = response.data.drinks as Drink[];
        return data;
    }

    async searchByIngredient(query: string): Promise<Drink[]> {
        const response = await this.axios.get("/filter.php?i=" + query);

        if (!response) {
            throw new Error("internal server error", { cause: "500" });
        }

        if (response.status !== 200) {
            throw new Error(response.statusText, { cause: response.status });
        }

        const data = response.data.drinks as Drink[];
        return data;
    }

    async searchByCategory(query: string): Promise<Drink[]> {
        const response = await this.axios.get("/filter.php?c=" + query);

        if (!response) {
            throw new Error("internal server error", { cause: "500" });
        }

        if (response.status !== 200) {
            throw new Error(response.statusText, { cause: response.status });
        }

        const data = response.data.drinks as Drink[];
        return data;
    }

    async searchById(id: number | string): Promise<Drink> {
        const response = await this.axios.get("/lookup.php?i=" + id);

        if (!response) {
            throw new Error("internal server error", { cause: "500" });
        }

        if (response.status !== 200) {
            throw new Error(response.statusText, { cause: response.status });
        }

        const data = response.data.drinks as Drink[];
        return data[0];
    }
}
