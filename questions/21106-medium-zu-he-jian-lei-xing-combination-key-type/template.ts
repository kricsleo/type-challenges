type ModifierKeys = ['cmd', 'ctrl', 'opt', 'fn']

type Comb<T extends any[]> = 
  T extends [infer Head extends string, ...infer Tail extends string[]]
    ? `${Head} ${Tail[number]}` | Comb<Tail>
    : never

type Combs = Comb<ModifierKeys>