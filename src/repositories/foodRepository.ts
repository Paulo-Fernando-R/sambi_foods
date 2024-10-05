import IfirestoreService from "../services/firestoreService/IfirestoreService";
import FirestoreService from "../services/firestoreService/firestoreService";
import FoodCategory, { FoodCountry } from "../models/foodCategoty";
import IauthService from "../services/authService/IauthService";
import AuthService from "../services/authService/authService";
import axiosInstance from "../services/customAxiosClient";
import IfoodRepository from "./IfoodRepository";
import FoodByUser from "../models/foodByUser";
import RecipeType from "../enums/recipeType";
import { AxiosInstance } from "axios";
import Food from "../models/food";

export default class FoodRepository implements IfoodRepository {
    private axios: AxiosInstance;
    private readonly favoriteCollection: string;
    private firestore: IfirestoreService;
    private authService: IauthService;

    constructor() {
        this.axios = axiosInstance(RecipeType.food);
        this.favoriteCollection = "FavoriteFoodCollection";
        this.firestore = new FirestoreService();
        this.authService = new AuthService();
    }
    async getFavoriteFood(): Promise<
        {
            data: FoodByUser;
            id: string;
        }[]
    > {
        const auth = this.authService.getItem();
        if (!auth) {
            throw new Error("Invalid user credentials");
        }

        const id = auth.user.id;
        const collection = `${this.favoriteCollection}_${id}`;

        const fireRes = await this.firestore.getCollection<FoodByUser>(collection);

        const list = fireRes.map((e) => {
            const aux = {
                data: {
                    food: e.data.food,
                    user: e.data.user,
                },
                id: e.id,
            };

            return aux;
        });

        return list;
    }

    async verifyIsFoodFavorite(food: Food): Promise<boolean> {
        const auth = this.authService.getItem();
        if (!auth) {
            throw new Error("Invalid user credentials");
        }

        const id = auth.user.id;
        const collection = `${this.favoriteCollection}_${id}`;
        const res = await this.firestore.getDocByProperty<FoodByUser>(food.idMeal, collection, "food.idMeal", "==");

        if (res.length > 0) {
            return true;
        }

        return false;
    }

    async favoriteFood(food: Food): Promise<void> {
        const auth = this.authService.getItem();
        if (!auth) {
            throw new Error("Invalid user credentials");
        }

        const id = auth.user.id;
        const collection = `${this.favoriteCollection}_${id}`;
        const body: FoodByUser = {
            user: id,
            food: food,
        };
        await this.firestore.addnewDoc<FoodByUser>(body, collection);
    }

    async removeFavoriteFood(food: Food): Promise<void> {
        const auth = this.authService.getItem();
        if (!auth) {
            throw new Error("Invalid user credentials");
        }

        const id = auth.user.id;
        const collection = `${this.favoriteCollection}_${id}`;

        const doc = await this.firestore.getDocByProperty<Food>(food.idMeal, collection, "food.idMeal", "==");

        await this.firestore.removeDoc(doc[0].id, collection);
    }

    async searchById(id: number | string): Promise<Food> {
        const response = await this.axios.get("/lookup.php?i=" + id);

        if (!response) {
            throw new Error("internal server error", { cause: "500" });
        }
        if (response.status !== 200) {
            throw new Error(response.statusText, { cause: response.status });
        }

        const data = response.data.meals[0] as Food;

        return data;
    }

    async searchByName(query: string): Promise<Food[]> {
        const response = await this.axios.get("/search.php?s=" + query);

        if (!response) {
            throw new Error("internal server error", { cause: "500" });
        }

        if (response.status !== 200) {
            throw new Error(response.statusText, { cause: response.status });
        }

        const data = response.data.meals as Food[];
        return data;
    }

    async searchByArea(query: string): Promise<Food[]> {
        const response = await this.axios.get("/filter.php?a=" + query);

        if (!response) {
            throw new Error("internal server error", { cause: "500" });
        }
        if (response.status !== 200) {
            throw new Error(response.statusText, { cause: response.status });
        }

        const data = response.data.meals as Food[];

        return data;
    }

    async searchByCategory(query: string): Promise<Food[]> {
        const response = await this.axios.get("/filter.php?c=" + query);

        if (!response) {
            throw new Error("internal server error", { cause: "500" });
        }
        if (response.status !== 200) {
            throw new Error(response.statusText, { cause: response.status });
        }

        const data = response.data.meals as Food[];

        return data;
    }

    async getCountries(): Promise<FoodCountry[]> {
        const response = await this.axios.get("/list.php?a=list");

        if (!response) {
            throw new Error("internal server error", { cause: "500" });
        }

        if (response.status !== 200) {
            throw new Error(response.statusText, { cause: response.status });
        }

        const data = response.data.meals as FoodCountry[];
        return data;
    }

    async getCategories(): Promise<FoodCategory[]> {
        const response = await this.axios.get("/categories.php");
        if (!response) {
            throw new Error("internal server error", { cause: "500" });
        }

        if (response.status !== 200) {
            throw new Error(response.statusText, { cause: response.status });
        }

        const data = response.data.categories as FoodCategory[];
        return data;
    }
}
