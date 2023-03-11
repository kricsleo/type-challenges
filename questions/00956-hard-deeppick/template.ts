type PickOne<T, path> = path extends keyof T ? {
  [key in path]: T[path]
} : path extends `${infer A}.${infer B}` ? A extends keyof T ? {
  [key in A]: PickOne<T[A], B>
} : never : never

// once again: Union2Intersection
type Union2Intersection3<T> = (T extends any ? ((x: T) => any) : never) extends ((x: infer R) => any) ? R : never

// interface A {
//   name: 'hoge'
//   age: 20
//   friend: {
//     name: 'fuga'
//     age: 30
//     family: {
//       name: 'baz'
//       age: 1 
//     }
//   }
// }

// type T1 = PickOne<A, 'friend.family.name'>   // { name : 'hoge' }

type DeepPick<T, Paths> = Union2Intersection3<PickOne<T, Paths>>
