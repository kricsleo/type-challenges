// type Length<T extends readonly any[]> = T extends {length: infer R} ? R : never

type Length<T extends readonly any[]> = T["length"]
