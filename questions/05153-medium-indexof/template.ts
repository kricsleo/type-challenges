type IndexOf<
  T extends unknown[], 
  U, 
  Acc extends unknown[] = []
> = T extends [infer First, ...infer Rest] 
    ? MyEqual<First, U> extends true
      ? Acc['length']
      : IndexOf<Rest, U, [...Acc, 1]>
    : -1
