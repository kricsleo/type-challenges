type MyRequired2<T, K extends keyof T = keyof T> = {
  [key in K]-?: T[key]
}

type GetRequired<T> = {
  [K in keyof T as T[K] extends MyRequired2<T, K>[K] ? K : never]: T[K]
}
