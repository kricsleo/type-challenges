// use array to wrap a type can prevent distributive extends
// 'string | number extends string' will be distributed
type IsUnion<T, B = T> = [T] extends [never] 
  ? false : T extends any 
    ? [B] extends [T] ? false : true 
    : false
