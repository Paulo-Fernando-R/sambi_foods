import Food from "../models/food";
import FoodCategory, { FoodCountry } from "../models/foodCategoty";
import Drink from "../models/drink";
import DrinkIngredient from "../models/drinkIngredient";
import DrinkCategory from "../models/drinkCategory";

export default interface IDrinkRepository {
    getCategories(): Promise<DrinkCategory[]>;
    getIngredients(): Promise<DrinkIngredient[]>;

    searchByName(query: string): Promise<Drink[]>;
    searchByIngredient(query: string): Promise<Drink[]>;
    searchByCategory(query: string): Promise<Drink[]>;
    searchById(id: number | string): Promise<Drink>;
}
