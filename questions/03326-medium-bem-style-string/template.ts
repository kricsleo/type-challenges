// type b1 = 'a' | 'b'
// type d1 = 'c' | 'd'
// type e1 = `${b1}${d1}` // => 'ac' | 'ad' | 'bc' | 'bd'

type Prefix<T extends any[], P extends string> = 
  T extends [] ? '' : `${P}${T[number]}`

type BEM<B extends string, E extends string[], M extends string[]> = 
  `${B}${Prefix<E, '__'>}${Prefix<M, '--'>}`
