type CapitalizeArray<T> =
  T extends [infer Head, ...infer Tail]
    ? [CapitalizeNestObjectKeys<Head>, ...CapitalizeArray<Tail>]
    : T

type CapitalizeNestObjectKeys<T> = 
  T extends any[]
    ? CapitalizeArray<T>
    : T extends Record<string, any>
      ? {
      [key in keyof T as key extends string ? Capitalize<key> : never]: CapitalizeNestObjectKeys<T[key]>
    } : T

