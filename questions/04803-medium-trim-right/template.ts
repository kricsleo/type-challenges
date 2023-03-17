type TrimRight<S extends string> = 
  S extends `${infer S1} ` ? TrimRight<S1>
    : S extends `${infer S1}\n` ? TrimRight<S1>
    : S extends `${infer S1}\t` ? TrimRight<S1>
    : S
