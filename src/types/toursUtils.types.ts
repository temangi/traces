export interface IToursUtils {
  array: Array<string>;
}

export interface IToursArray extends Array<string> {}

export interface RenderWhatYouGetFunction {
  (): JSX.Element[] | null;
}
