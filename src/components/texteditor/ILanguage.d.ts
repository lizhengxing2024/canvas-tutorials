import type { ITextReader } from "./ITextReader";
import type { ILanguageStyle } from "./ILanguageStyle";

export interface ILanguage {
  begin(textReader: ITextReader, state: string): void;
  read(): ILanguageStyle;
}
