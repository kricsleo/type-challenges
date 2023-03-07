type MyOmit<T, K extends keyof T> = {
  // todo: !! use 'as' to remove keys
  [key in keyof T as key extends K ? never : key]: T[key]
}
