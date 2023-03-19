type Number2Array2<T, Acc extends any[] = []> =
  Acc['length'] extends T 
    ? Acc
    : Number2Array2<T, [...Acc, any]>

type TwoSum<T extends any[], U extends number> = 
  T extends [infer Head, ...infer Tail]
    ? Number2Array2<U> extends [...Number2Array2<Head>, ...infer Tail2]
      ? Tail2['length'] extends Tail[number]
        ? true
        : TwoSum<Tail, U>
      : TwoSum<Tail, U>
    : false

