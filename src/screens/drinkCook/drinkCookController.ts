import Drink from "../../models/drink";
import convertUnits from "../../utils/convertUnits";
export default class DrinkCookController {
    public imageBaseUrl: string;
    constructor() {
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

    listIngredients(data: Drink) {
        const ingredient = Object.entries(data)
            .filter((entry) => entry[0].includes("strIngredient"))
            .filter((entry) => entry[1])
            .map((e) => e[1]);

        return ingredient as string[];
    }

    listMeasures(data: Drink) {
        const measures = Object.entries(data)
            .filter((entry) => entry[0].includes("strMeasure"))
            .filter((entry) => entry[1])
            .map((e) => e[1] as string);

        return this.formatMeasueres(measures);
    }

    formatMeasueres(measures: string[]) {
        const aux = [] as string[];

        measures.forEach((e) => {
            aux.push(convertUnits.ozToMl(e));
        });

        return aux;
    }
}
