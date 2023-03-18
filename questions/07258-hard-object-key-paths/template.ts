// object like '{}' only got 'string' keys
// array object like '[]' got 'number' keys
type GenNode<K extends string | number, IsRoot = true> = 
  IsRoot extends true
    ? `${K}` 
    : `.${K}` | (K extends number ? `[${K}]` | `.[${K}]` : never)

type ObjectKeyPaths<
  T extends object,
  IsRoot extends boolean = true,
  K extends keyof T = keyof T
> = 
  K extends string | number
    ? GenNode<K, IsRoot> | (T[K] extends object ? `${GenNode<K, IsRoot>}${ObjectKeyPaths<T[K], false>}` : never)
    : never
