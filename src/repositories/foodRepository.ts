import FoodCategory, { FoodCountry } from "../models/foodCategoty";
import axiosInstance from "../services/customAxiosClient";
import IfoodRepository from "./IfoodRepository";
import RecipeType from "../enums/recipeType";
import { AxiosInstance } from "axios";
import Food from "../models/food";

export default class FoodRepository implements IfoodRepository {
    private axios: AxiosInstance;

    constructor() {
        this.axios = axiosInstance(RecipeType.food);
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
