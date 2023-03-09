declare function Currying<T>(fn: T): 
  T extends (v1: infer V1, ...rest: infer Rest) => infer R 
    ? Rest extends [] 
      ? T
      : (v: V1) => ReturnType<typeof Currying<(...v: Rest) => R>>
    : never
