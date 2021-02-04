import Axios from 'axios'
import { Dispatch } from 'redux'
import { ProductDispatchType, ProductSucces, ProductFail } from './ProductTypes'

export const getProducts = () => async (dispatch: Dispatch<ProductDispatchType>) => {
   try {
      const res = await Axios.get(`https://fakestoreapi.com/products`)
      const data = res.data

      dispatch({
         type: ProductSucces,
         payload: data
      })
      

   } catch (err) {

   }
}