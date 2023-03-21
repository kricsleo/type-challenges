type UnionReplace<T, U extends [any, any][]> = 
  U extends [infer Head extends [any, any],  ...infer Tail extends [any, any][]]
    ? Head[0] extends T 
      ? UnionReplace<Exclude<T, Head[0]> | Head[1], Tail>
      : UnionReplace<T, Tail>
    : T
    