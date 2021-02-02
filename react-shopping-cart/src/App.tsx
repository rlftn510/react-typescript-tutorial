import { useState } from 'react'
import { useQuery } from 'react-query'
import Item from './Item/Item'
import Drawer from '@material-ui/core/Drawer'
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge'

import { Wrapper, StyledButton } from './App.styles'

//types

export type CartItemType = {
   id: number;
   catetory: string;
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
   const [carItems, setCarItems] = useState([] as CartItemType[])
   const { data, isLoading, error } = useQuery<CartItemType[]>(
      'products',
      getProduct
   )

   const handleAddToCart = (clickedItem: CartItemType) => null
   // const 
   const getTotalItems = (items: CartItemType[]) => {
      return items.reduce((ack: number, item) => ack + item.amount, 0)
   }

   if (isLoading) return <LinearProgress />
   if (error) return <div>someting went wrong....</div>


   console.log(data)
   console.log(isLoading)
   return (
      <Wrapper>
         <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
            Cart gose open
         </Drawer>
         <StyledButton onClick={() => setCartOpen(true)}>
            <Badge badgeContent={getTotalItems()} color="error">
               <AddShoppingCartIcon />
            </Badge>
         </StyledButton>
         <Grid container spacing={3}>
            {data?.map(item => (
               <Grid item key={item.id} xs={12} sm={4}>
                  <Item item={item} handleAddToCart={handleAddToCart}></Item>
               </Grid>
            ))}
         </Grid>
      </Wrapper>
   );
}

export default App;
