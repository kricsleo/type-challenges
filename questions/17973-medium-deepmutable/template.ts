type DeepMutable<T extends object> = 
  T extends Function 
    ? T
    : T extends object ? {
    -readonly [key in keyof T]: T[key] extends object ? DeepMutable<T[key]> : T[key]
  } : T
