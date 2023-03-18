// 'T' means a collection, 'U = T' limit 'U' to one of the collection
type CombineString<T, U = T> =
  U extends string
    ? U | `${U} ${CombineString<Exclude<T, U>>}`
    : ''

type Combination<T extends string[]> = CombineString<T[number]>
