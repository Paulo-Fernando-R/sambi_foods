import FoodRepository from "../../repositories/foodRepository";
import IfoodRepository from "../../repositories/IfoodRepository";
import IDrinkRepository from "../../repositories/IDrinkRepository";
import DrinkRepository from "../../repositories/drinkRepository";
export default class FoodsController {
    private repository: IDrinkRepository;
    constructor() {
        this.repository = new DrinkRepository();
    }

    async getCategories() {
        return await this.repository.getCategories();
    }

    async getIngredients() {
        return await this.repository.getIngredients();
    }

    async getResources() {
        const response = await Promise.all([this.getCategories(), this.getIngredients()]).then((values) => values);

        return {
            categories: response[0],
            ingredients: response[1],
        };
    }
}
