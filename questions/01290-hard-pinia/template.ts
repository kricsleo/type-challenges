
type GettersReturn<Getters> = {
  [key in keyof Getters]: Getters[key] extends () => infer R ? R : never
}

// much like vue.extend
declare function defineStore<State, Getters, Actions>(store: {
  id: string
  state: () => State
  getters: Readonly<Getters> & ThisType<Readonly<State> & GettersReturn<Getters> & Actions>
  actions: Actions & ThisType<State & Readonly<GettersReturn<Getters>> & Actions>
}): State & GettersReturn<Getters> & Actions
