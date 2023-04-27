interface Field<T = any, R = any> {
  readonly prop: string
  readonly default?: T
  readonly formatter?: (v: T) => R
}

const field0 = { prop: 'gender' } as const
const field1 = { prop: 'name', default: 'john' } as const
const field2 = { prop: 'time', default: new Date(), formatter: (t: Date) => t.valueOf() } as const
const fields = [
  field0,
  field1,
  field2,
] as const

// infer to 👇
// type FieldsData = {
//   name: string
//   time: number
// }

type ToPrimitive2<T> = 
  T extends Function 
    ? Function
    : T extends object ? {
        [key in keyof T]: ToPrimitive<T[key]>
      }
      : T extends string ? string
      : T extends number ? number 
      : T extends boolean ? boolean
      : T extends symbol ? symbol
      : never

type Copy5<T> = {
  [key in keyof T]: T[key]
}
      
type InferFieldData<F extends Field<any, any>> = F extends {
  prop: infer Prop extends string
  default?: infer Default
  formatter?: infer Formatter
} 
  ? Formatter extends (v: Default) => infer Value
    ? { [k in Prop]: ToPrimitive2<Value> } 
    : never extends Default
      ? { [k in Prop]: string } 
      : { [k in Prop]: ToPrimitive2<Default> } 
  : never

type InferFieldsData<FS extends readonly Field<any, any>[]> = 
  FS extends readonly []
    ? {}
    : FS extends readonly [infer F extends Field, ...infer Rest extends Field[]]
      ? Copy5<InferFieldData<F> & InferFieldsData<Rest>>
      : {}

type Field0 = InferFieldData<typeof field0>
type Field1 = InferFieldData<typeof field1>
type Field2 = InferFieldData<typeof field2>
type Fields = InferFieldsData<typeof fields>
