type ToPrimitive<T> = 
  T extends Function 
    ? Function
    : T extends object ? {
        [key in keyof T]: ToPrimitive<T[key]>
      }
      : T extends string ? string
      : T extends number ? number 
      : T extends boolean ? boolean
      : T extends symbol ? symbol
      : never
  