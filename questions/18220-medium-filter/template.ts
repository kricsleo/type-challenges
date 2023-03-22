type Filter<T extends any[], P> =
  T extends [infer Head, ...infer Tail]
    ? Head extends P
      ? [Head, ...Filter<Tail, P>]
      : Filter<Tail, P>
    : []
