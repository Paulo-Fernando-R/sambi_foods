import Food from "../../models/food";
import FoodCategory from "../../models/foodCategoty";
import ItranslateRepository from "../../repositories/ItranslateRepository";
import TranslateRepository from "../../repositories/translateRepository";
import ItranslateService from "./ItranslateService";

export default class TranslateServive implements ItranslateService {

    private readonly translateRepository: ItranslateRepository;

    constructor() {
        this.translateRepository = new TranslateRepository();
    }

    async translate<T>(obj: T): Promise<T | undefined> {
        // TranslateRepository();
        if (!obj) return;

        const values = Object.values(obj);
        const keys = Object.keys(obj);

        //!FAZ A TRADUÇÃO E CONVERTE EM OBJ, COMENTADO PARA ECOMOMIZAR TRADUÇÃO
        // const response = await repository.translate(values.join(" /|\\ "), "");

        // const translated = response.split(" /|\\ ");

        // let fobj = {};
        // for (let i = 0; i < keys.length; i++) {
        //     Object.defineProperty(fobj, keys[i], {
        //         value: translated[i],
        //         writable: true,
        //     });
        // }

        //? TESTE SEM USAR A API DE TRADUÇÃO
        let fobj = {};
        for (let i = 0; i < keys.length; i++) {
            Object.defineProperty(fobj, keys[i], {
                value: values[i],
                writable: true,
                enumerable: true,
                configurable: true
            });
        }

        const res = fobj as T | undefined;

        return res;
    }

    async translateList<T>(list: T[]): Promise<T[] | undefined> {
        
        if (!list) return;

        const res: T[] = [];

        for (let i = 0; i < list.length; i++) {
            const aux = await this.translate<T>(list[i]);

            if (aux !== undefined) {
                res.push(aux);
            }
        }

        return res;
    }
}




















/*
async function translate<T>(obj: T | undefined) {
    const repository = new TranslateRepository();
    if (!obj) return;

    const values = Object.values(obj);
    const keys = Object.keys(obj);

    //!FAZ A TRADUÇÃO E CONVERTE EM OBJ, COMENTADO PARA ECOMOMIZAR TRADUÇÃO
    // const response = await repository.translate(values.join(" /|\\ "), "");

    // const translated = response.split(" /|\\ ");

    // let fobj = {};
    // for (let i = 0; i < keys.length; i++) {
    //     Object.defineProperty(fobj, keys[i], {
    //         value: translated[i],
    //         writable: true,
    //     });
    // }

    //? TESTE SEM USAR A API DE TRADUÇÃO
    let fobj = {};
    for (let i = 0; i < keys.length; i++) {
        Object.defineProperty(fobj, keys[i], {
            value: values[i],
            writable: true,
        });
    }

    const res = fobj as T | undefined;

    return res;
    //console.log(res?.idCategory, res?.strCategoryDescription, res?.strCategoryThumb);
}

async function translateList<T>(list: T[] | undefined) {
    const repository = new TranslateRepository();
    if (!list) return;

    const res: T[] = [];

    for (let i = 0; i < list.length; i++) {
        const aux = await translate<T>(list[i]);

        if (aux !== undefined) {
            res.push(aux);
        }
    }

    return res;
}

const translateServive = {
    translate,
    translateList,
};

export default translateServive;
*/
