// todo: use tuple2Union
type Tuple2Union<T extends any[]> = T[keyof T & number]

// todo: magic!
// @see https://github.com/type-challenges/type-challenges/issues/21658
type Union2IntersectionFn<T> = ( T extends any ? (x: () => T) => any : never) extends ((x: infer R) => any) ? R : never

// (() => 'a') & (() => 'b') extends () => infer R ? R : never     =>        'b'
type LastIntersectionItem<T> = T extends () => infer R ? R : never

type LastUnionItem<T> = LastIntersectionItem<Union2IntersectionFn<T>>

type UnionToTuple<T, K extends any[] = [], Last = LastUnionItem<T>> = 
  [T] extends [never] ? K : UnionToTuple<Exclude<T, Last>, [...K, Last]>
