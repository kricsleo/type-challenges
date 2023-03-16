// // leads to 'excessively deep and possibly infinite' error when too big
// type Minus<T, R extends any[] = []> = R['length'] extends T 
//   ? R extends [any, ...infer Rest] ? Rest['length'] : never
//   : Minus<T, [any, ...R]>

// // type C2 = Minus<9> // => 8

// type FlattenDepth<T extends any[], D extends number = 1> = 
//   D extends 0 
//     ? T
//     : T extends [infer T1, ...infer Rest] 
//       ? T1 extends any[] 
//         ? FlattenDepth<[...T1, ...FlattenDepth<Rest>], Minus<D>>
//         : FlattenDepth<[T1, ...FlattenDepth<Rest>], Minus<D>>
//       : T

type FlattenOnce<T extends any[]> =
  T extends [infer R1, ...infer R2] 
    ? R1 extends any[] 
      ? [...R1, ...FlattenOnce<R2>]
      : [R1, ...FlattenOnce<R2>]
    : []

type FlattenDepth<T extends any[], D extends number = 1, DR extends any[] = []> = 
  DR['length'] extends D
    ? T
    : FlattenOnce<T> extends T 
      ? T
      : FlattenDepth<[...FlattenOnce<T>], D, [any, ...DR]>