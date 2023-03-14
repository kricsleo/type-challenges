// index signature only refers to 'number' | 'string' | 'symbol' 
// specific string like 'bar' is not an index signature
type FilterPropertyKey<T> = string extends T ? never
  : number extends T ? never 
  : symbol extends T ? never
  : T

type RemoveIndexSignature<T> = {
  [key in keyof T as FilterPropertyKey<key>]: T[key]
}
