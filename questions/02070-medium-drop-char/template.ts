type DropChar<S, R extends string> = 
  S extends `${infer S1}${R}${infer S2}` 
    ? `${S1}${DropChar<S2, R>}`
    : S
