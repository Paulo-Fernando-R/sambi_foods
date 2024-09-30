import Food from "../models/food";
import FoodCategory, { FoodCountry } from "../models/foodCategoty";

export default interface IfoodRepository {
    getCategories(): Promise<FoodCategory[]>;
    getCountries(): Promise<FoodCountry[]>;

    searchByName(query: string): Promise<Food[]>;
    searchByArea(query: string): Promise<Food[]>;
    searchByCategory(query: string): Promise<Food[]>;
    searchById(id: number | string): Promise<Food>;
}
