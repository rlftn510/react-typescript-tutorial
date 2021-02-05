import Axios from 'axios'
import { Dispatch } from 'redux'
import { ProductDispatchType, PRODUCTS, PRODUCT_FAIL } from './ProductTypes'

export const getProducts = () => async (dispatch: Dispatch<ProductDispatchType>) => {
   try {
      const res = await Axios.get(`https://fakestoreapi.com/products`)
      const data = res.data
      console.log(data)
      dispatch({
         type: PRODUCTS,
         payload: data
      })
      

   } catch (err) {
      dispatch({
         type: PRODUCT_FAIL
      })
   }
}