import IDrinkRepository from "../../repositories/IDrinkRepository";
import DrinkRepository from "../../repositories/drinkRepository";
import Drink from "../../models/drink";

export default class DrinkDetailsController {
    private readonly repository: IDrinkRepository;
    constructor() {
        this.repository = new DrinkRepository();
    }

    async verifyIsFoodFavorite(drink: Drink) {
        const res = await this.repository.verifyIsDrinkFavorite(drink);
        return res;
    }

    async addFavoriteDrink(drink: Drink) {
        await this.repository.favoriteDrink(drink);
    }
    async removeFavoriteDrink(drink: Drink) {
        await this.repository.removeFavoriteDrink(drink);
    }

    async getDetails(id: number | string) {
        const res = await this.repository.searchById(id);
        const aux = await this.verifyIsFoodFavorite(res);
        return {
            drink: res,
            fav: aux,
        };
    }

    listIngredients(data: Drink) {
        const ingredient = Object.entries(data)
            .filter((entry) => entry[0].includes("strIngredient"))
            .filter((entry) => entry[1])
            .map((e) => e[1]);

        return ingredient;
    }
}
