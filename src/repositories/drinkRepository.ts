import Drink from "../models/drink";
import DrinkCategory from "../models/drinkCategory";
import DrinkIngredient from "../models/drinkIngredient";
import IDrinkRepository from "./IDrinkRepository";
import axiosInstance from "../services/customAxiosClient";
import { AxiosInstance } from "axios";
import RecipeType from "../enums/recipeType";

export default class DrinkRepository implements IDrinkRepository {
    private axios: AxiosInstance;

    constructor() {
        this.axios = axiosInstance(RecipeType.drink);
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
    searchByName(query: string): Promise<Drink[]> {
        throw new Error("Method not implemented.");
    }
    searchByIngredient(query: string): Promise<Drink[]> {
        throw new Error("Method not implemented.");
    }
    searchByCategory(query: string): Promise<Drink[]> {
        throw new Error("Method not implemented.");
    }
    searchById(id: number | string): Promise<Drink> {
        throw new Error("Method not implemented.");
    }
}
