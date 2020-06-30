declare namespace SecondPageScssNamespace {
  export interface ISecondPageScss {
    container: string
  }
}

declare const SecondPageScssModule: SecondPageScssNamespace.ISecondPageScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SecondPageScssNamespace.ISecondPageScss
}

export = SecondPageScssModule
