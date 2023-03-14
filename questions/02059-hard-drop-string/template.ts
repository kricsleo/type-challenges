type String2Union<S> = S extends `${infer S1}${infer S2}`
  ? S1 | String2Union<S2> 
  : ''
type DropString<S, R extends string = '', T = String2Union<R>> = 
  S extends `${infer S1}${infer S2}`
    ? S1 extends T 
      ? DropString<S2, R, T>
      : `${S1}${DropString<S2, R>}`
    : S
