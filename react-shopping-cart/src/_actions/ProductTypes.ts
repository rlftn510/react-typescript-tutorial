import { CartItemType } from '../App'

export const PRODUCTS = 'PRODUCTS'
export const PRODUCT_FAIL = 'PRODUCT_FAIL'

export interface ProductSucces {
   type: typeof PRODUCTS
   payload: CartItemType[]
}

export interface ProductFail {
   type: typeof PRODUCT_FAIL
}

export type ProductDispatchType = ProductSucces | ProductFail
