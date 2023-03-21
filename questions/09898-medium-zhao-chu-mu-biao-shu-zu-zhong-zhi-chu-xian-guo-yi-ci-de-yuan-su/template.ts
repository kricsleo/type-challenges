type FindEles<T extends any[], Acc extends any[] = [], Checked = never> =
  T extends [infer Head, ...infer Tail]
    ? Head extends Tail[number]
      ? FindEles<Tail, Acc, Checked | Head>
      : Head extends Checked
        ? FindEles<Tail, Acc, Checked>
        : FindEles<Tail, [...Acc, Head], Checked | Head>
    : Acc
