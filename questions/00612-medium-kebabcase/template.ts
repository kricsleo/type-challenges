type FirstCharacter<S> = S extends `${infer Char}${any}` ? Char : never
type IsUppercase<T extends string> = T extends Uppercase<T> 
  ? T extends Lowercase<T> ? false : true 
  : false

// todo:  !! never extends <any> => <any>

type KebabCase<S> = S extends `${infer S1}${infer S2}` 
  ? S2 extends Uncapitalize<S2>
    ? `${Lowercase<S1>}${KebabCase<S2>}`
    : `${Lowercase<S1>}-${KebabCase<S2>}`
  : S
