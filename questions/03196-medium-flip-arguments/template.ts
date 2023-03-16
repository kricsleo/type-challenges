type Reverse2<T extends any[]> = T extends [infer F, ...infer R] ? [...Reverse<R>, F] : []

type FlipArguments<T extends Function> = 
  T extends (...args: infer Args) => infer R 
    ? (...args: Reverse2<Args>) => R
    : never
