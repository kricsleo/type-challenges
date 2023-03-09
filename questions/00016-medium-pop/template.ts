type Pop<T extends any[]> =  T extends [] 
  ? []
  : T extends [...infer prev, any] ? prev
  : never
