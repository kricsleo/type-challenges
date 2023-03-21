// `${1.0}` => '1'
type Integer<T extends number> = number extends T
  ? never
  : `${T}` extends `${number}.${'' | number}`
    ? never
    : T
