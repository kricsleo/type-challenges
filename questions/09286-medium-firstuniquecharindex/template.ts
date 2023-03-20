type FirstUniqueCharIndex<T extends string, Checked = '', Acc extends any[] = []> = 
  T extends `${infer S1}${infer S2}`
    ? S2 extends `${any}${S1}${any}`
      ? FirstUniqueCharIndex<S2, S1 | Checked, [...Acc, any]>
      : S1 extends Checked 
        ? FirstUniqueCharIndex<S2, Checked, [...Acc, any]>
        : Acc['length']
    : -1
