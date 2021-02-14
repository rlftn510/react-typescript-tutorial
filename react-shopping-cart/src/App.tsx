import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from './_actions/ProductActions'
import Drawer from '@material-ui/core/Drawer'
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge'
import { RootReducerType } from './Store' 
// Component
import Item from './components/Item/Item'
import Cart from './Cart/Cart'
// styled
import { Wrapper, StyledButton } from './App.styles'

//types
export type CartItemType = {
   id: number;
   category: string;
   description: string;
   image: string;
   price: number;
   title: string;
   amount: number;
}

const getProduct = async (): Promise<CartItemType[]> => {
   return await (await fetch('https://fakestoreapi.com/products')).json();
}

const App = () => {
   const [cartOpen, setCartOpen] = useState(false)
   const [cartItems, setCartItems] = useState([] as CartItemType[])
   // const [products, setProducts] = useState([] as CartItemType[])
   // const { data, isLoading, error } = useQuery<CartItemType[]>(
   //    'products',
   //    getProduct
   // )
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getProducts())
   }, [])
   const productReducer = useSelector((state:RootReducerType) => state.ProductReducer)
   
   const isLoading = useSelector((state:RootReducerType) => state.ProductReducer.success)
   
   // sample data 
   const data = [
      {
         id: 5,
         title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
         price: 695,
         description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
         category: "jewelery",
         image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
         amount: 1,
         },
         {
         id: 6,
         title: "Solid Gold Petite Micropave ",
         price: 168,
         description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
         category: "jewelery",
         image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
         amount: 2,
         },
   ]
   const error = false
   // const 
   const getTotalItems = (items: CartItemType[]) => {
      return items.reduce((ack: number, item) => ack + item.amount, 0)
   }

   const handleAddToCart = (clickedItem: CartItemType) => {

      setCartItems(prev => {
         const isItemInCart = prev.find(item => item.id === clickedItem.id)

         if(isItemInCart) {
            prev.map(item => {
               return item.id === clickedItem.id ? {...item, amount: item.amount + 1} : item

            })
         }
         return [...prev, {...clickedItem, amount: 1}]
      })

      // setCartItems(prev => {
      //    console.log(prev)
      //    const isItemInCart = prev.find(item => item.id === clickedItem.id)

      //    if (isItemInCart) {
      //       return prev.map(item => (
      //          item.id === clickedItem.id
      //             ? { ...item, amount: item.amount + 1}
      //             : item
      //       ))
      //    }

      //    return [...prev, { ...clickedItem, amount: 1}]
      // })
   }
   const handleRemoveFromCart = (id: number) => {
      setCartItems(prev => {
         return prev.reduce((ack, item) => {
            if (item.id === id) {
              if (item.amount === 1) return ack;
              return [...ack, { ...item, amount: item.amount - 1 }];
            } else {
              return [...ack, item];
            }
          }, [] as CartItemType[])
      }
         
       );
   }

   if (!isLoading) return <LinearProgress />
   if (error) return <div>someting went wrong....</div>
   
   return (
      <Wrapper>
         <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
            <Cart 
               cartItems={cartItems}
               addToCart={handleAddToCart}
               removeFromCart={handleRemoveFromCart}
            />
         </Drawer>
         <StyledButton onClick={() => setCartOpen(true)}>
            <Badge badgeContent={getTotalItems(cartItems)} color="error">
               <AddShoppingCartIcon />
            </Badge>
         </StyledButton>
         <Grid container spacing={3}>
            {  productReducer.success ? 
               productReducer.products?.map(item => (
                  <Grid item key={item.id} xs={12} sm={4}>
                     <Item item={item} handleAddToCart={handleAddToCart}></Item>
                  </Grid>
               )) : null
            }
         </Grid>
      </Wrapper>
   );
}

export default App;
