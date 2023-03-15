type IsRequiredKey<T, K extends keyof T> = {
  [key in K]: T[key]
} extends {
  [key in K]-?: T[key]
} ? true : false
