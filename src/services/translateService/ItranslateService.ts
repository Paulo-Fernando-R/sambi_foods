export default interface ItranslateService {
    translate<T>(obj: T): Promise<T | undefined>;

    translateList<T>(list: T[]): Promise<T[] | undefined>;
}
