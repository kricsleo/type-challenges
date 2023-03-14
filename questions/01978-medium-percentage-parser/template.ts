type PercentageParser<A extends string> = 
  A extends `${infer S1}${infer S2}` 
    ? S1 extends '-' | '+' 
      ? [S1, ...(S2 extends `${infer D}%` ? [D, '%'] : [S2, ''])]
      : ['', ...(A extends `${infer D}%` ? [D, '%'] : [A, ''])]
    : ['', '', '']