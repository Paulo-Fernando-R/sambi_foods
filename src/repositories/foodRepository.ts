import ItranslateService from "../services/translateService/ItranslateService";
import IfirestoreService from "../services/firestoreService/IfirestoreService";
import TranslateServive from "../services/translateService/translateService";
import FirestorService from "../services/firestoreService/firestoreService";
import FoodCategory, { FoodCountry } from "../models/foodCategoty";
import axiosInstance from "../services/customAxiosClient";
import IfoodRepository from "./IfoodRepository";
import RecipeType from "../enums/recipeType";
import { AxiosInstance } from "axios";
import Food from "../models/food";

export default class FoodRepository implements IfoodRepository {
    private axios: AxiosInstance;
    private translate: ItranslateService;
    private firestore: IfirestoreService;
    private readonly categoryCollection: string;
    private readonly countryCollection: string;
    private readonly foodCoolection: string;

    constructor() {
        this.axios = axiosInstance(RecipeType.food);
        this.translate = new TranslateServive();
        this.firestore = new FirestorService();
        this.categoryCollection = "Categories";
        this.countryCollection = "Countries";
        this.foodCoolection = "Foods";
    }
    async searchById(id: number | string): Promise<Food> {
        const response = await this.axios.get("/lookup.php?i=" + id);

        if (!response) {
            throw new Error("internal server error", { cause: "500" });
        }
        if (response.status !== 200) {
            throw new Error(response.statusText, { cause: response.status });
        }

        const fireRes = await this.firestore.getDocByProperty<Food>(id.toString(), this.foodCoolection, "idMeal", "==");

        if (fireRes.length > 0) {
            return fireRes[0].data;
        }

        const data = response.data.meals[0] as Food;
        const translated = await this.translate.translate<Food>(data);

        if (translated) {
            await this.firestore.addnewDoc<Food>(translated, this.foodCoolection);
            return translated;
        }
        return data;
    }

    async searchByName(query: string): Promise<Food[]> {
        const response = await this.axios.get("/search.php?s=" + query);

        if (!response) {
            throw new Error("internal server error", { cause: "500" });
        }

        if (response.status !== 200) {
            throw new Error(response.statusText, { cause: response.status });
        }

        const data = response.data.meals as Food[];
        const fireRes: Food[] = [];

        for (let i = 0; i < data.length; i++) {
            const res = await this.firestore.getDocByProperty<Food>(
                data[i].idMeal,
                this.foodCoolection,
                "idMeal",
                "=="
            );
            if (res.length > 0) fireRes.push(res[0].data);
        }

        const spliced = fireRes.map((e) => {
            return data.splice(
                data.findIndex((f) => f.idMeal === e.idMeal),
                1
            )[0];
        });

        const translated = await this.translate.translateList<Food>(data);

        if (translated) {
            for (let i = 0; i < translated.length; i++) {
                await this.firestore.addnewDoc<Food>(translated[i], this.foodCoolection);
            }

            return translated.concat(fireRes);
        }
        return data.concat(spliced);
    }

    async searchByArea(query: string): Promise<Food[]> {
        const response = await this.axios.get("/filter.php?a=" + query);

        if (!response) {
            throw new Error("internal server error", { cause: "500" });
        }
        if (response.status !== 200) {
            throw new Error(response.statusText, { cause: response.status });
        }

        const data = response.data.meals as Food[];

        const translated = await this.translate.translateList<Food>(data);

        if (translated) {
            return translated;
        }
        return data;
    }

    async searchByCategory(query: string): Promise<Food[]> {
        const response = await this.axios.get("/filter.php?c=" + query);

        if (!response) {
            throw new Error("internal server error", { cause: "500" });
        }
        if (response.status !== 200) {
            throw new Error(response.statusText, { cause: response.status });
        }

        const data = response.data.meals as Food[];

        const translated = await this.translate.translateList<Food>(data);

        if (translated) {
            return translated;
        }
        return data;
    }

    async getCountries(): Promise<FoodCountry[]> {
        const response = await this.axios.get("/list.php?a=list");

        if (!response) {
            throw new Error("internal server error", { cause: "500" });
        }

        if (response.status !== 200) {
            throw new Error(response.statusText, { cause: response.status });
        }

        const fireRes = await this.firestore.getCollection<FoodCountry>(this.countryCollection);

        if (fireRes.length > 0) {
            return fireRes.map((e) => e.data);
        }

        const data = response.data.meals as FoodCountry[];

        const translated = await this.translate.translateList<FoodCountry>(data);

        if (translated) {
            for (let i = 0; i < translated.length; i++) {
                await this.firestore.addnewDoc(translated[i], this.countryCollection);
            }
        } else {
            return data;
        }

        return translated;
    }

    async getCategories(): Promise<FoodCategory[]> {
        const response = await this.axios.get("/categories.php");
        if (!response) {
            throw new Error("internal server error", { cause: "500" });
        }

        if (response.status !== 200) {
            throw new Error(response.statusText, { cause: response.status });
        }

        const fireRes = await this.firestore.getCollection<FoodCategory>(this.categoryCollection);

        if (fireRes.length > 0) {
            return fireRes.map((e) => e.data);
        }

        const data = response.data.categories as FoodCategory[];

        const translated = await this.translate.translateList<FoodCategory>(data);

        if (translated) {
            for (let i = 0; i < translated.length; i++) {
                await this.firestore.addnewDoc(translated[i], this.categoryCollection);
            }
        } else {
            return data;
        }

        return translated;
    }
}
