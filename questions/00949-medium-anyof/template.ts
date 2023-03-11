type IsTrue<T> = T extends number ? T extends 0 ? false : true
  : T extends string ? T extends '' ? false : true
  : T extends boolean ? T extends false ? false : true
  : T extends unknown[] ? T extends [] ? false : true
  : T extends Record<PropertyKey, unknown> ? keyof T extends never ? false : true
  : false

type c9 = IsTrue<[89]>

type AnyOf<T extends readonly any[]> = T extends [infer A, ...infer Rest] 
  ? IsTrue<A> extends true ? true : AnyOf<Rest>
  : false
