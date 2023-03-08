type TupleToObject<T extends Readonly<Array<string | number | symbol>>> = {
  [key in T[number]]: key
}
