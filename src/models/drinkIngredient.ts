export default class DrinkIngredient {
    private _strIngredient1: string;
    private _image: string;

    constructor(ingredient: string) {
        this._strIngredient1 = ingredient;
        this._image = "www.thecocktaildb.com/images/ingredients/" + this.strIngredient1;
    }

    public get strIngredient1() {
        return this._strIngredient1;
    }

    public get image() {
        return this._image;
    }

    public set strIngredient1(ingridient: string) {
        this._strIngredient1 = ingridient;
    }

    public set image(image: string) {
        this._image = image;
    }
}
