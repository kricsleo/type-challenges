type Number2Array<T extends number, Acc extends any[] = []> =
  Acc['length'] extends T 
    ? Acc
    : Number2Array<T, [...Acc, 1]>

// M => minuend, S => subtrahend
type Subtract<M extends number, S extends number> = 
  Number2Array<M> extends [...Number2Array<S>, ...infer Tail]
    ? Tail['length']
    : never
