type LastIndexOf<T extends any[], U> = 
  T extends [...infer Rest, infer R]
    ? MyEqual<U, R> extends true
      ? Rest['length']
      : LastIndexOf<Rest, U>
    : -1
