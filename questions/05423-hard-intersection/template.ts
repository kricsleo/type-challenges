type Array2Union2<T> = T extends any[] ? T[number] : T

type Intersection<T extends any[]> =
  T extends [infer Head, ...infer Tail]
    ? Array2Union2<Head> & Intersection<Tail>
    : unknown
