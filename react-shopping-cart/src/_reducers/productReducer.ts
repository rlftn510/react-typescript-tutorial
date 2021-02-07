import { PRODUCTS, PRODUCT_FAIL, ProductDispatchType } from '../_actions/ProductTypes'
import { CartItemType } from '../App'

interface initialState {
   success: boolean
   products?: CartItemType[]
}
const initialState: initialState = {
   success: false
}

const ProductReducer = ( state = initialState, action: ProductDispatchType):initialState => {
   switch (action.type) {
      case PRODUCTS:
         return {
            ...state,
            success: true,
            products: action.payload
         }
         break;
      case PRODUCT_FAIL:
         return {
            ...state,
            success: false
         }
         break;
      default:
         return state
   }
}

export default ProductReducer