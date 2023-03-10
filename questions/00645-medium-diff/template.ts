// type Diff<O, O1> = Copy<{
//   [key in keyof O as key extends keyof O1 ? never : key]: O[key]
// } & {
//   [key in keyof O1 as key extends keyof O ? never : key]: O1[key]
// }>

type Copy<T> = {
  [key in keyof T]: T[key]
}

// todo: 'keyof (O & O1)' means 'either has key', 'keyof (O | O1)' means 'both have key'
type Diff<O, O1> = {
  [key in keyof (O & O1) as key extends keyof (O | O1) ? never : key]: (O & O1)[key]
}
