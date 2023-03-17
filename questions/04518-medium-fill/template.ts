type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Result extends any[] = [],
  Index extends number = Start,
> = Start extends End 
  ? T
  : Result['length'] extends Index 
    ? Fill<T, N, Start, End, Result, Index extends Start ? End : Start>
    : T extends [infer T1, ...infer Rest]
      ? Fill<Rest, N, Start, End, [...Result, Index extends End ? N : T1], Index>
    : Result
