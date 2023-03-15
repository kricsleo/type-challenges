type Copy3<T> = {
  [key in keyof T]: T[key]
}

type MyOmit3<T, K extends keyof T> = {
  [key in keyof T as key extends K ? never : key]: T[key]
}

type PartialByKeys<T, K extends keyof T = keyof T> = Copy3<MyOmit3<T, K> & {
  [key in K]?: T[key]
}>
