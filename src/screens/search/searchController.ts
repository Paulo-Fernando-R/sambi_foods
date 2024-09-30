import SearchType from "../../enums/searchType";
import FoodRepository from "../../repositories/foodRepository";
import IfoodRepository from "../../repositories/IfoodRepository";

export default class SearchController {
    private readonly repository: IfoodRepository;
    public placeholderData: string[];
    constructor() {
        this.repository = new FoodRepository();
        this.placeholderData = ["", "", "", "", "", "", "", "", "", "", "", ""];
    }

    async SearchRecipes(query: string, type: SearchType) {
        switch (type) {
            case SearchType.area:
                return await this.repository.searchByArea(query);
                break;

            case SearchType.category:
                return await this.repository.searchByCategory(query);
                break;
            case SearchType.name:
                return await this.repository.searchByName(query);
                break;
        }
    }

    tagsHandler(tags: string | undefined) {
        if (!tags) return "";

        const aux = tags.includes(",");
        tags = aux ? tags.substring(0, tags.indexOf(",")) : tags;

        return tags;
    }
}
