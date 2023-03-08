type Chainable<T = {}> = {
  // todo: !! use extends in function params
  option<K extends string, V>(key: K extends keyof T ? never : K, value: V): Chainable<Intersection2Interface<Omit<T, K> & Record<K, V>>>
  get(): T
}

// todo: !! use {name: string; b: number} instead of {name:string} & {b:number}
type Intersection2Interface<T> = {
  [key in keyof T]: T[key]
}
