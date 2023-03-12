type JoinFn<S extends string, Params extends string[], R extends string = ''> = 
  // todo: use 'as' after 'infer'
  Params extends [infer P extends string, ...infer Rest extends string[]] 
    ? Rest extends [] ? `${R}${P}` : JoinFn<S, Rest, `${R}${P}${S}`> 
    : ''

declare function join<T extends string>(delimiter: T): 
  <Params extends string[]>(...parts: Params) => JoinFn<T, Params>
