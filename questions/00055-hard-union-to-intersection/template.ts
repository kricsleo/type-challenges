// !! todo: magic!
// @see https://fettblog.eu/typescript-union-to-intersection/
type UnionToIntersection<U> = 
  (U extends any ? (v: U) => any : never) extends 
    (v: infer R) => any ? R : never
