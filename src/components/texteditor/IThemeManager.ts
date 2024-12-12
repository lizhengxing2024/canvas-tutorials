import type { ITheme } from "./ITheme";

export interface IThemeManager {
  add(name: string, theme: ITheme): void;
  remove(name: string): void;
  get(name: string): ITheme;
}
