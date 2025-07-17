/* this is a helper type
not globally available in typescript
to use this needed to be defined as given below
*/
type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

type ComplexType = {
    a: number,
    b: number,
} | {
    c: string,
} & {
    d: number,
}

type betterComplexType = Prettify<ComplexType>;