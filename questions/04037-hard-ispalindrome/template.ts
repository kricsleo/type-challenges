type ReverseString<T> = T extends `${infer S1}${infer S2}`
  ? `${ReverseString<S2>}${S1}`
  : ''

type IsPalindrome<T extends string | number> = ReverseString<`${T}`> extends `${T}`
  ? true 
  : false
