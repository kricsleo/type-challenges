type Join<T extends (string | number)[], U extends string | number> = 
  // use `extends` as `as` to infer a type
  T extends [infer S1 extends string, ...infer Rest extends (string | number)[]]
    ? Rest extends [] 
      ? S1 
      : `${S1}${U}${Join<Rest, U>}`
    : ''
