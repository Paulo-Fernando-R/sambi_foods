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

    async getCountries() {
        return await this.repository.getCountries();
    }

    async getResources() {
        const response = await Promise.all([this.getCategories(), this.getCountries()]).then((values) => values);

        return {
            categories: response[0],
            countries: response[1],
        };
    }
}
