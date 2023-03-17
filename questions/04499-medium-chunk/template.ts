type Chunk<T, K, R extends any[] = []> = 
  T extends [infer T1, ...infer Rest]
    ? [...R, T1]['length'] extends K 
      ? [[...R, T1], ...Chunk<Rest, K>]
      : Chunk<Rest, K, [...R, T1]>
    : R extends [] 
      ? []
      : [R]
