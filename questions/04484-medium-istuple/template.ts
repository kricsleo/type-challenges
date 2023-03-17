type IsTuple<T> = [T] extends [never] 
  ? false 
  : T extends [] 
    ? true
    : T extends readonly [any, ...infer Rest] 
      ? Rest['length'] extends T['length'] 
        ? false
        : true
      : false
      