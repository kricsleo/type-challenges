type LengthOfString2<S extends string, A extends any[] = []> = S extends `${infer F}${infer Rest}`
  ? LengthOfString2<Rest, [F, ...A]>
  : A['length']
