type IsUpperCase<T extends string> =
  T extends Uppercase<T>
    ? T extends Lowercase<T> 
      ? false
      : true
    : false

type SnakeCase<T extends string> = 
  T extends `${infer Head}${infer Tail}`
    ? IsUpperCase<Head> extends true
      ? `_${Lowercase<Head>}${SnakeCase<Tail>}`
      : `${Head}${SnakeCase<Tail>}`
    : T
