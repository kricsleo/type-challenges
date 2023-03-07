type MyEqual<T, K> = 
  // todo: !! https://github.com/Microsoft/TypeScript/issues/27024#issuecomment-510924206
  (<G>() => G extends T ? 1 : 2) extends
  (<G>() => G extends K ? 1 : 2) ? true : false

type GetReadonlyKeys<T> = keyof {
  [K in keyof T as MyEqual<Pick<T, K>, Readonly<Pick<T, K>>> extends true ? K : never]: any
}
