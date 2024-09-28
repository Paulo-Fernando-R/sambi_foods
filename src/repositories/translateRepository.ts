import { AxiosInstance } from "axios";
import ItranslateRepository from "./ItranslateRepository";
import translate from "translate";

export default class TranslateRepository implements ItranslateRepository {
    constructor() {
        translate.engine = "deepl";
        translate.key = process.env.EXPO_PUBLIC_TRANSLATE_API;
    }

    async translate(text: string, language: string | undefined): Promise<string> {
        const res = await translate(text, { from: "en", to: "pt" });

        if (!res) {
            return "";
        }
        return res;
    }
}
