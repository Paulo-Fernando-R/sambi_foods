import DrinkIngredient from "../models/drinkIngredient";
import DrinkCategory from "../models/drinkCategory";
import Drink from "../models/drink";

export default interface IDrinkRepository {
    getCategories(): Promise<DrinkCategory[]>;
    getIngredients(): Promise<DrinkIngredient[]>;

    searchByName(query: string): Promise<Drink[]>;
    searchByIngredient(query: string): Promise<Drink[]>;
    searchByCategory(query: string): Promise<Drink[]>;
    searchById(id: number | string): Promise<Drink>;
    favoriteDrink(drink: Drink): Promise<void>;
    removeFavoriteDrink(drink: Drink): Promise<void>;
}
