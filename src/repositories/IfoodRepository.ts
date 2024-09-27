import FoodCategory from "../models/foodCategoty";

export default interface IfoodRepository {
    getCategories(): Promise<FoodCategory[]>;
}
