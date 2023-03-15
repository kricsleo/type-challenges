type Copy4<T> = {
  [key in keyof T]: T[key]
}

type MyOmit4<T, K extends keyof T> = {
  [key in keyof T as key extends K ? never : key]: T[key]
}

type RequiredByKeys<T, K extends keyof T = keyof T> = Copy4<MyOmit4<T, K> & {
  [key in K]-?: T[key]
}>
