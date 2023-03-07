type MyReturnType<T> = T extends (...v: any) => infer Return ? Return : never
