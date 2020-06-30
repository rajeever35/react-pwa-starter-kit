declare namespace HelloWorldScssNamespace {
  export interface IHelloWorldScss {
    container: string
    item: string
  }
}

declare const HelloWorldScssModule: HelloWorldScssNamespace.IHelloWorldScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HelloWorldScssNamespace.IHelloWorldScss
}

export = HelloWorldScssModule
