export const PRODUCTS = 'PRODUCTS'
export const FAIL = 'FAIL'

import { CartItemType } from '../App'

export interface ProductSucces {
   type: typeof PRODUCTS
   payload: CartItemType
}

export interface ProductFail {
   type: typeof FAIL
}

export type ProductDispatchType = ProductSucces | ProductFail
