import Drink from "../../models/drink";

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
            aux.push(this.formateMeasure(e));
        });

        return aux;
    }

    formateMeasure(text: string) {
        let aux = text.split(" ").filter((e) => e);
        const index = aux.findIndex((e) => e === "oz");

        if (index === -1) {
            return text;
        }

        aux.splice(index, 1);

        let result = 0;
        for (let i = 0; i < aux.length; i++) {
            result = result + this.parseNotation(aux[i]);
        }

        result = result * 29.574;
        return result.toFixed(0) + " ml";
    }

    parseNotation(text: string) {
        if (!text.includes("/")) {
            return isNaN(parseFloat(text)) ? 0 : parseFloat(text);
        }

        const aux = text.split("/");
        const res = parseFloat(aux[0]) / parseFloat(aux[1]);

        return isNaN(res) ? 0 : res;
    }
}
