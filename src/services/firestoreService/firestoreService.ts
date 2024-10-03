import IfirestoreService from "./IfirestoreService";
import firestore from "@react-native-firebase/firestore";
import { Operator } from "../../types/utilityTypes";

export default class FirestorService implements IfirestoreService {
    async getCollection<T>(collection: string) {
        const response = await firestore().collection(collection).get();
        const aux = response.docs.map((e) => e.data() as T);
        console.log(response.docs.map((e) => e.data()));
        return aux;
    }

    async getDocById<T>(id: string, collection: string) {
        const response = await firestore().collection(collection).doc(id).get();
        const aux = response.data() as T;
        return aux;
    }
    async getDocByProperty<T>(
        valueToSearch: string,
        collection: string,
        property: keyof T | string,
        operator: Operator
    ) {
        const response = await firestore()
            .collection(collection)
            .where(property.toString(), operator, valueToSearch)
            .get();
        console.log(response.docs.map((e) => e.data()));
        const aux = response.docs.map((e) => e.data() as T);

        return aux;
    }

    async addnewDoc<T extends { [x: string]: any }>(doc: T, collection: string) {
        await firestore().collection(collection).doc().set(doc);
    }

    async removeDoc(id: string, collection: string) {
        await firestore().collection(collection).doc(id).delete();
    }
}
