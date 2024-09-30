import FoodRepository from "../../repositories/foodRepository";
import IfoodRepository from "../../repositories/IfoodRepository";

export default class DetailsController {
    private readonly repository: IfoodRepository;
    constructor() {
        this.repository = new FoodRepository();
    }

    async getDetails(id: number | string) {
         const res =  await this.repository.searchById(id);
         return res
    }
}
