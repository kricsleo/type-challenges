type MyParameters<T extends (...args: any[]) => any> = 
  T extends (...v: infer Args) => any ? Args : never
