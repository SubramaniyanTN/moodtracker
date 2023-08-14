declare const brand:unique symbol ;


export type BrandType<T,TBrand>=T & {[brand]:TBrand}