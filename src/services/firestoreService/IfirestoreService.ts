import { Operator } from "../../types/utilityTypes";

export default interface IfirestoreService {
    getCollection<T>(collection: string): Promise<T[]>;
    getDocById<T>(id: string, collection: string): Promise<T>;
    getDocByProperty<T>(
        valueToSearch: string,
        collection: string,
        property: keyof T | string,
        operator: Operator
    ): Promise<T[]>;
    addnewDoc<
        T extends {
            [x: string]: any;
        }
    >(
        doc: T,
        collection: string
    ): Promise<void>;
    removeDoc(id: string, collection: string): Promise<void>;
}
