type Zip<T extends any[], U extends any[]> = 
  T extends [infer T1, ...infer R1] 
    ? U extends [infer U2, ...infer R2]
      ? [[T1, U2], ...Zip<R1, R2>]
      : []
    : []
