export default class DrinkIngredient {
    strIngredient1: string;
    image: string;

    constructor(ingredient: string) {
        this.strIngredient1 = ingredient;
        this.image = "www.thecocktaildb.com/images/ingredients/" + this.strIngredient1;
    }
}
