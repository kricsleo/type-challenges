type Split<S extends string, SEP extends string> = 
  S extends `${infer S1}${SEP}${infer S2}` 
    ? [S1, ...Split<S2, SEP>] 
    : string extends S ? string[] 
      : S extends SEP ? [] 
        : [S]
