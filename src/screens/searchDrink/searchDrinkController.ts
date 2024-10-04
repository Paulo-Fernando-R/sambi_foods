import SearchType from "../../enums/searchType";
import DrinkRepository from "../../repositories/drinkRepository";
import IDrinkRepository from "../../repositories/IDrinkRepository";

export default class SearchDrinkController {
    private readonly repository: IDrinkRepository;
    public placeholderData: string[];
    constructor() {
        this.repository = new DrinkRepository();
        this.placeholderData = ["", "", "", "", "", "", "", "", "", "", "", ""];
    }

    async SearchRecipes(query: string, type: SearchType) {
        switch (type) {
            case SearchType.ingredients:
                return await this.repository.searchByIngredient(query);
                break;

            case SearchType.category:
                return await this.repository.searchByCategory(query);
                break;
            case SearchType.name:
                return await this.repository.searchByName(query);
                break;
        }
    }

    tagsHandler(tags: string | undefined | null) {
        if (!tags) return "";

        const aux = tags.includes(",");
        tags = aux ? tags.substring(0, tags.indexOf(",")) : tags;

        return tags;
    }
}
