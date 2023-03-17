type MutableKeys<T> = 
  keyof {
    // if is readonly
    [key in keyof T as (MyEqual<{ -readonly [key1 in key]: T[key] }, { [key1 in key]: T[key] }> extends true ? key : never)]: any
  }
