// todo: construct an array
type MyTuple<Length, Arr extends number[] = []> = 
  Arr['length'] extends Length ? Arr : MyTuple<Length, [...Arr, Arr['length']]>

type c = MyTuple<3>

type c2 = [2, 3] extends [1, 2, infer R] ? R : false
type InclusiveRange<Lower extends number, Higher extends number> = 
  // todo: array slice
  MyTuple<Higher> extends [...MyTuple<Lower>, ...infer R] ? [...R, Higher]
    : []
