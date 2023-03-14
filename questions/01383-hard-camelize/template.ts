type CamelizeString<T, R extends string = '', ShouldCamel = false> = T extends `${infer S1}${infer S2}` 
  ? S1 extends '_' 
    ? CamelizeString<S2, R, true>
    : ShouldCamel extends true 
      ? CamelizeString<S2, `${R}${Uppercase<S1>}`, false>
      :  CamelizeString<S2, `${R}${S1}`, false>
  : R

type BetterCamelizeString<T> = 
  // string pattern matching works well!
  T extends `${infer S1}_${infer S2}${infer S3}` 
    ? `${S1}${Uppercase<S2>}${BetterCamelizeString<S3>}`
    : T

type CamelizeObject<T> = {
  [key in keyof T as CamelizeString<key>]: 
    T[key] extends any[] ? CamelizeArray<T[key]> 
      : T[key] extends Record<PropertyKey, any> ? CamelizeObject<T[key]>
      : T[key]
}

type CamelizeArray<T> = T extends [infer A1, ...infer A2]
  ? [CamelizeObject<A1>, ...CamelizeArray<A2>] 
  : []

type Camelize<T extends object> = T extends any[] 
  ? CamelizeArray<T>
  : CamelizeObject<T>