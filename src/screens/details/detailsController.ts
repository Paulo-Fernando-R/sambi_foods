import Food from "../../models/food";
import FoodRepository from "../../repositories/foodRepository";
import IfoodRepository from "../../repositories/IfoodRepository";

export default class DetailsController {
    private readonly repository: IfoodRepository;
    constructor() {
        this.repository = new FoodRepository();
    }

    async getDetails(id: number | string) {
        const res = await this.repository.searchById(id);
        return res;
    }

    listIngredients(data: Food) {
        const ingredient = Object.entries(data)
            .filter((entry) => entry[0].includes("strIngredient"))
            .filter((entry) => entry[1])
            .map((e) => e[1]);

        return ingredient;
    }
}
