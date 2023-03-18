type Array2Union2<T> = T extends any[] ? T[number] : T

// 1 & unknown // => 1
// 1 | unknown // => unknown

type Intersection<T extends any[]> =
  T extends [infer Head, ...infer Tail]
    ? Array2Union2<Head> & Intersection<Tail>
    : unknown
