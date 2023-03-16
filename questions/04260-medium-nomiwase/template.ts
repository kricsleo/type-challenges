type String2Union2<S extends string> =
  S extends `${infer S1}${infer S2}`
    ? S1 | String2Union2<S2>
    : ''
type Exclude2<T, U> = T extends U ? never : T;

type isNever<T> = [T] extends [never] ? true : false

type AllCombinations<S extends string, U extends string = String2Union2<S>> = 
  isNever<U> extends true
    ? ''
    : {
      [C in U]: `${C}${AllCombinations<never, Exclude<U, C>>}` | ''
    }[U]
