import { AxiosInstance } from "axios";
import RecipeType from "../enums/recipeType";
import FoodCategory, { FoodCountry } from "../models/foodCategoty";
import axiosInstance from "../services/customAxiosClient";
import IfoodRepository from "./IfoodRepository";

export default class FoodRepository implements IfoodRepository {
    private axios: AxiosInstance;
    constructor() {
        this.axios = axiosInstance(RecipeType.food);
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
