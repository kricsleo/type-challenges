type MyEqual2<T, K> = 
  // todo: !! https://github.com/Microsoft/TypeScript/issues/27024#issuecomment-510924206
  (<G>() => G extends T ? 1 : 2) extends
  (<G>() => G extends K ? 1 : 2) ? true : false

// loop over array
type Includes<T extends readonly any[], U> = T extends [infer A, ...infer B]
  ? MyEqual2<A, U> extends true ? true : Includes<B, U>
  : false
