// require an optional 'undefined' leads to 'never'
// Required3<{ key?: undefined }>   =>   { key: never }
type Required3<T> = {
  [key in keyof T]-?: T[key]
}

type ObjectEntries<T, key extends keyof T = keyof T> = 
  key extends any 
    ? [key, Required3<T>[key] extends never ? undefined : Required3<T>[key]] 
    : never
