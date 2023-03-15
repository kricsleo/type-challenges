type ObjectFromEntries<T extends any[]> = Copy<UnionToIntersection<T extends any 
  ? { [key in T[0]]: T[1] } 
  : never>>
