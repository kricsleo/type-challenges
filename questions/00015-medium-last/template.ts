type Last<T extends any[]> = T extends [] 
  ? never 
  // todo: !! not allowed in js, but works for ts
  : T extends [...any, infer last] ? last : never
