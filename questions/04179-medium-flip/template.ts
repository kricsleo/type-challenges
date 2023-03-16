type Flip<T extends Record<PropertyKey, string | number | boolean>> = {
  [key in keyof T as `${T[key]}`]: key
}
