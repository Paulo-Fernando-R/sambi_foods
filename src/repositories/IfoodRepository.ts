import FoodCategory, { FoodCountry } from "../models/foodCategoty";

export default interface IfoodRepository {
    getCategories(): Promise<FoodCategory[]>;
    getCountries(): Promise<FoodCountry[]>
}
