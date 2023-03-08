type InferComputed<Computed extends Record<string, Function>> = {
  [key in keyof Computed]: Computed[key] extends () => infer ComputedReturn ? ComputedReturn : never
}

declare function SimpleVue<
  Data extends Record<string, any>,
  Computed extends Record<string, Function>,
  Methods extends Record<string, Function>,
>(options: {
  data(this: void): Data
  // todo: !! use ThisType
  computed: Computed & ThisType<Data & InferComputed<Computed> & Methods>
  methods: Methods & ThisType<Data & InferComputed<Computed> & Methods>
}): any
