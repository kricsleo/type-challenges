type TupleToNestedObject<T extends any[], U> = 
  T extends [] ? U
    : T extends [infer T1, ...infer Rest] ? T1 extends string ? {
      [key in T1]: Rest extends [] ? U : TupleToNestedObject<Rest, U>
    } : never : {}
