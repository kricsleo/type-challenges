
type c23 = [1, ...([2] | [])] // =>  [1, 2] | [1]

type Subsequence<T extends any[] > =
  T extends [infer F, ...infer R]
    ? [F, ...Subsequence<R>] | Subsequence<R>
    : []