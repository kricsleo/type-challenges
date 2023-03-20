type AssignOne<Source, Target, K extends keyof (Source & Target) = keyof (Source & Target)> =
  Target extends Record<string, unknown> ? {
    [key in K]: key extends keyof Target 
      ? Target[key] 
      : key extends keyof Source 
        ? Source[key]
        : never
  } : Source

type Assign<T extends Record<string, unknown>, U> = 
  U extends [infer Head, ...infer Tail]
    ? Assign<AssignOne<T, Head>, Tail>
    : T
