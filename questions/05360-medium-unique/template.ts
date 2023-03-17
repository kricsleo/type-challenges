type Include<T extends any[], R> =
  T extends [infer T1, ...infer Rest] 
    ? MyEqual<T1, R> extends true
      ? true
      : Include<Rest, R>
    : false

type Unique<T> = 
  T extends [...infer Head, infer Tail] 
    ? Include<Head, Tail> extends true
      ? Unique<Head>
      : [...Unique<Head>, Tail]
    : []
