type Path<T, K extends keyof T = keyof T> = 
  K extends never
    ? never
    // once again: [1, ...([2] | [])]       =>          [1] | [1, 2]
    : [K, ...(T[K] extends Record<string, any> ? Path<T[K]> | [] : [])]
