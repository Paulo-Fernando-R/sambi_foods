import Drink from "./drink";
import DrinkByUser from "./drinkByUser";
import Food from "./food";
import FoodByUser from "./foodByUser";

export default class FavoriteItemAdapter {
    public fireId: string;
    public id: string;
    public name: string;
    public tag: string;
    public category: string;
    public image: string;
    public type: "food" | "drink";

    constructor(
        fireId: string,
        id: string,
        name: string,
        tag: string,
        category: string,
        image: string,
        type: "food" | "drink"
    ) {
        this.fireId = fireId;
        this.id = id;
        this.name = name;
        this.tag = tag;
        this.category = category;
        this.image = image;
        this.type = type;
    }

    static adapt(
        item:
            | {
                  data: FoodByUser;
                  id: string;
              }
            | {
                  data: DrinkByUser;
                  id: string;
              }
    ) {
        if (!item) {
            return;
        }

        if ("food" in item.data) {
            const aux = new FavoriteItemAdapter(
                item.id,
                item.data.food.idMeal,
                item.data.food.strMeal,
                item.data.food.strTags,
                item.data.food.strCategory,
                item.data.food.strMealThumb,
                "food"
            );

            return aux;
        }

        if ("drink" in item.data) {
            const aux = new FavoriteItemAdapter(
                item.id,
                item.data.drink.idDrink,
                item.data.drink.strDrink,
                item.data.drink.strTags ?? "",
                item.data.drink.strCategory,
                item.data.drink.strDrinkThumb,
                "drink"
            );

            return aux;
        }
    }
}
