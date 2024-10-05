import IfirestoreService from "./IfirestoreService";
import firestore from "@react-native-firebase/firestore";
import { Operator } from "../../types/utilityTypes";

export default class FirestoreService implements IfirestoreService {
    async getCollection<T>(collection: string) {
        const response = await firestore().collection(collection).get();
       
        const aux = response.docs.map((e) => {
          //  console.log(e.data)
            return {
                data: e.data() as T,

                id: e.id,
            };
        });
      
        return aux;
    }

    async getDocById<T>(id: string, collection: string) {
        const response = await firestore().collection(collection).doc(id).get();
        const aux = { data: response.data() as T, id: response.id };
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

        const aux = response.docs.map((e) => {
            return {
                data: e.data() as T,
                id: e.id,
            };
        });

        return aux;
    }

    async addnewDoc<T extends { [x: string]: any }>(doc: T, collection: string) {
        await firestore().collection(collection).doc().set(doc);
    }

    async removeDoc(id: string, collection: string) {
        await firestore().collection(collection).doc(id).delete();
    }
}
