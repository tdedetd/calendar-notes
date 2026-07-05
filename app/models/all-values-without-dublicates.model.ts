type HasElement<El, Ar extends Array<unknown>> = Ar extends [infer CurEl, ...infer NewAr]
  ? CurEl extends undefined
    ? false
    : El extends CurEl
      ? true
      : HasElement<El, NewAr>
  : false;

export type AllValuesWithoutDublicates<
  UnionType,
  Ar extends unknown[],
  Acc extends unknown[] = [],
> = Ar extends [infer CurEl, ...infer NewArr]
  ? HasElement<CurEl, Acc> extends true
    ? CurEl extends string | number | boolean
      ? `dublicated '${CurEl}'`
      : never
    : AllValuesWithoutDublicates<Exclude<UnionType, CurEl>, NewArr, [...Acc, CurEl]>
  : Exclude<UnionType, Acc> extends never
    ? Acc
    : UnionType extends string | number | boolean
      ? `missing '${UnionType}'`
      : never;
