type MapTypes<T, R extends { mapFrom: any; mapTo: any}> = {
  [key in keyof T]: 
    T[key] extends R['mapFrom'] 
      // filter R from 'A | B' to the satisfied 'A'
      ? R extends { mapFrom: T[key]} 
        ? R['mapTo'] 
        : never
    : T[key]
}
