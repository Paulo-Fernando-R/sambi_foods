import { AxiosInstance } from "axios";
import RecipeType from "../enums/recipeType";
import FoodCategory, { FoodCountry } from "../models/foodCategoty";
import axiosInstance from "../services/customAxiosClient";
import IfoodRepository from "./IfoodRepository";
import Food from "../models/food";
import TranslateServive from "../services/translateService/translateService";
import ItranslateService from "../services/translateService/ItranslateService";

export default class FoodRepository implements IfoodRepository {
    private axios: AxiosInstance;
    private translate: ItranslateService;

    constructor() {
        this.axios = axiosInstance(RecipeType.food);
        this.translate = new TranslateServive();
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

        const translated = await this.translate.translateList<Food>(data);

        if (translated) {
            return translated;
        }
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

        const translated = await this.translate.translateList<Food>(data);

        if (translated) {
            return translated;
        }
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

        const translated = await this.translate.translateList<Food>(data);

        if (translated) {
            return translated;
        }
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
