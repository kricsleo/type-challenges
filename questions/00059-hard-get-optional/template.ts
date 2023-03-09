type MyRequired3<T, K extends keyof T = keyof T> = {
  [key in K]-?: T[key]
}

type GetOptional<T> = {
  [key in keyof T as T[key] extends MyRequired3<T, key>[key] ? never : key]: T[key]
}
