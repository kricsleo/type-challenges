type Array2Union<T> = T extends [infer T1, ...infer Rest]
  ? T1 | Array2Union<Rest>
  : T

type Without<T extends any[], U> = 
  T extends [infer T1, ...infer Rest] 
    ? T1 extends Array2Union<U>
      ? Without<Rest, U>
      : [T1, ...Without<Rest, U>]
    : T
