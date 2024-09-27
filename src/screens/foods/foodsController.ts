import FoodRepository from "../../repositories/foodRepository";
import IfoodRepository from "../../repositories/IfoodRepository";
export default class FoodsController {
    private repository: IfoodRepository;
    constructor() {
        this.repository = new FoodRepository();
    }

    async getCategories() {
        return await this.repository.getCategories();
    }
}
