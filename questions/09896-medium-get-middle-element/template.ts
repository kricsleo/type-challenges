type GetMiddleElement<T> = 
  T extends [any, ...infer Middle, any]
    ? Middle['length'] extends 0 
      ? T
      : Middle['length'] extends 1 
        ? Middle
        : GetMiddleElement<Middle>
    : T