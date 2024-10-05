import Food from "../models/food";
import FoodByUser from "../models/foodByUser";
import FoodCategory, { FoodCountry } from "../models/foodCategoty";

export default interface IfoodRepository {
    getCategories(): Promise<FoodCategory[]>;
    getCountries(): Promise<FoodCountry[]>;
    searchByName(query: string): Promise<Food[]>;
    searchByArea(query: string): Promise<Food[]>;
    searchByCategory(query: string): Promise<Food[]>;
    searchById(id: number | string): Promise<Food>;
    favoriteFood(food: Food): Promise<void>;
    removeFavoriteFood(food: Food): Promise<void>;
    verifyIsFoodFavorite(food: Food): Promise<boolean>;
    getFavoriteFood(): Promise<
        {
            data: FoodByUser;
            id: string;
        }[]
    >;
}
