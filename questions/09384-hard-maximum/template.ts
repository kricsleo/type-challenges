type ReturnGreater<T extends number, U extends number, Acc extends unknown[] =[]> = T extends Acc['length']
? U
: U extends Acc['length']
  ? T
  : ReturnGreater<T, U, [...Acc, '']>

// use 'extends' in 'infer' to limit 'infer' variable type 
type Maximum<T extends unknown[]> = T extends [infer First extends number, infer Second extends number, ...infer Rest]
? Rest extends []
  ? ReturnGreater<First, Second>
  : Maximum<[ReturnGreater<First, Second>, ...Rest]>
: never