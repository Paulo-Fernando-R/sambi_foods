import { AxiosInstance } from "axios";
import RecipeType from "../enums/recipeType";
import FoodCategory from "../models/foodCategoty";
import axiosInstance from "../services/customAxiosClient";
import IfoodRepository from "./IfoodRepository";

export default class FoodRepository implements IfoodRepository {
    private axios: AxiosInstance;
    constructor() {
        this.axios = axiosInstance(RecipeType.food);
    }
    async getCategories(): Promise<FoodCategory[]> {
        const response = await this.axios.get("/categories.php");
        const data = response.data.categories as FoodCategory[];
        return data;
    }
}
