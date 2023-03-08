type DeepReadonly<T> = {
  // todo: !! use keyof to determine if is an object (vs extends object)
  readonly [key in keyof T]: keyof T[key] extends never ? T[key] : DeepReadonly<T[key]>
}
