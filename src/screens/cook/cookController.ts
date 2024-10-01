import Food from "../../models/food";
import FoodRepository from "../../repositories/foodRepository";
import IfoodRepository from "../../repositories/IfoodRepository";

export default class CookController {
    private readonly repository: IfoodRepository;
    public imageBaseUrl: string;
    constructor() {
        this.repository = new FoodRepository();
        this.imageBaseUrl = "https://www.themealdb.com/images/ingredients/";
    }

    separateInstructions(text: string) {
        const lines = text.split("\r\n");

        return lines.filter((e) => e);
    }

    handleYtUrl(url: string) {
        const aux = url.replace("/watch?v=", "/embed/");

        return aux;
    }

    listIngredients(data: Food) {
        const ingredient = Object.entries(data)
            .filter((entry) => entry[0].includes("strIngredient"))
            .filter((entry) => entry[1])
            .map((e) => e[1]);

        return ingredient as string[];
    }

    listMeasures(data: Food) {
        const measures = Object.entries(data)
            .filter((entry) => entry[0].includes("strMeasure"))
            .filter((entry) => entry[1])
            .map((e) => e[1]);

        return measures as string[];
    }
}
