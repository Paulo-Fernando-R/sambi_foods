export default interface ItranslateRepository {
    translate(text: string, language: string | undefined): Promise<string>;
}
