// never extends never  =>  never
// @see https://github.com/microsoft/TypeScript/issues/31751#issuecomment-498526919
type IsNever<T> = [T] extends [never] ? true : false
