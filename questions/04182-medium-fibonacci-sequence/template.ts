type Fibonacci<
  T extends number,
  CurrentIndex extends any[] = ['🧮'],
  Prev extends any[] = [],
  Current extends any[] = ['🧮']
> =
  CurrentIndex['length'] extends T
  ? Current['length']
  : Fibonacci<
      T,
      [...CurrentIndex, '🧮'],
      Current,
      [...Prev, ...Current]
    >;