// type Contain<T, K> = 
//   T extends `${infer Head}${infer Tail}`
//     ? Head extends K 
//       ? true
//       : Contain<Tail, K>
//     : false

// type CheckRepeatedChars3<T extends string> = 
//   T extends `${infer Head}${infer Tail}`
//     ? Contain<Tail, Head> extends true
//       ? true
//       : CheckRepeatedChars3<Tail>
//     : false

type CheckRepeatedChars<T extends string> = T extends `${infer First}${infer Rest}`
  // Wow! A simple `string contains`!
  ? Rest extends `${any}${First}${any}`
    ? true
    : CheckRepeatedChars<Rest>
  : false