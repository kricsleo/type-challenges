type MyAwaited2<T> = T extends Promise<infer R> ? R : T

type InferPromiseAll<T> = Promise<{
  [k in keyof T]: MyAwaited2<T[k]>
}>

// todo: use re-generate array
declare function PromiseAll<T extends any[]>(values: readonly [...T]): InferPromiseAll<T>
// declare function PromiseAll<T extends unknown[]>(
//   values: readonly [...T],
// ): Promise<{ [K in keyof T]: Awaited<T[K]> }>;
