type StringToArray<T extends string> = T extends `${infer F}${infer R}` ? [F, ...StringToArray<R>] : []

type StringLength<T extends string, R extends any[] = []> = 
  T extends `${infer S1}${infer S2}`
    ? StringLength<S2, [...R, S1]>
    : R['length']

type DigitArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
type IsGrater<T extends string, U extends string, R extends any[] = []> = 
  T extends DigitArray[R['length']] ? false 
    : U extends DigitArray[R['length']] ? true
    : IsGrater<T, U, [...R, any]>

type CompareDigitArray<T extends string[], U extends string[]> = 
T extends [infer TF extends string, ...infer TR extends string[]] 
  ? U extends [infer UF extends string, ...infer UR extends string[]] 
    ? IsGrater<TF, UF> extends true 
      ? true : CompareDigitArray<TR, UR> 
    : false
  : false;

type GreaterThan<T extends number, U extends number> = 
  StringLength<`${T}`> extends StringLength<`${U}`> ? CompareDigitArray<StringToArray<`${T}`>, StringToArray<`${U}`>> 
    :  GreaterThan<StringLength<`${T}`>, StringLength<`${U}`>>
