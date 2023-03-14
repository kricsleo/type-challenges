
// leads to maximum deepth when number is too big( >= 1000)
type MinusOne<T extends number, U extends any[] = []> = 
  U['length'] extends T 
    ? U extends [any, ...infer R] ? R['length'] : never
    : MinusOne<T, [any, ...U]>
