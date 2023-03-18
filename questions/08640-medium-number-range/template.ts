type Number2Array4<T extends number, Acc extends number[] = [0]> =
  T extends 0 
    ? []
    : Acc['length'] extends T 
      ? Acc
      : Number2Array4<T, [...Acc, Acc['length']]>
    
type NumberRange<L extends number, H extends number> = 
  Number2Array4<H> extends [...Number2Array4<L>, ...infer Tail]
    ? Tail[number] | H
    : never
