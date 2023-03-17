type Trunc<T extends string | number> = `${T}` extends `${infer T1}.${any}` 
  ? T1
  : `${T}`
