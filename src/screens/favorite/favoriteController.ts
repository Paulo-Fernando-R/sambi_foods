import FavoriteFilterEnum from "../../enums/favoriteFilterEnum";
import FavoriteItemAdapter from "../../models/favoriteItemAdapter";
import DrinkRepository from "../../repositories/drinkRepository";
import FoodRepository from "../../repositories/foodRepository";
import IDrinkRepository from "../../repositories/IDrinkRepository";
import IfoodRepository from "../../repositories/IfoodRepository";

export default class FavoriteController {
    private foodRepository: IfoodRepository;
    private drinkRepository: IDrinkRepository;

    constructor() {
        this.foodRepository = new FoodRepository();
        this.drinkRepository = new DrinkRepository();
    }

    async getFavoriteFood() {
        return await this.foodRepository.getFavoriteFood();
    }

    async getFavoriteDrink() {
        return await this.drinkRepository.getFavoriteDrink();
    }

    filterData(filter: FavoriteFilterEnum, data: FavoriteItemAdapter[] | undefined) {
        if (filter === FavoriteFilterEnum.all) {
            return data;
        }
        return data?.filter((e) => e.type === filter);
    }

    async getFavorites() {
        const res1 = await this.getFavoriteFood();

        const res2 = await this.getFavoriteDrink();

        const foods = res1
            .map((e) => {
                const aux = FavoriteItemAdapter.adapt(e);

                if (aux) return aux;
            })
            .filter((e) => e !== undefined);

        const drinks = res2
            .map((e) => {
                const aux = FavoriteItemAdapter.adapt(e);
                if (aux) return aux;
            })
            .filter((e) => e !== undefined);

        const ret = foods.concat(drinks);

        ret.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });

        return ret;
    }
}
