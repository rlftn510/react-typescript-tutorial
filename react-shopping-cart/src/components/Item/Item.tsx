import { Button } from '@material-ui/core';

import {CartItemType} from '../../App'

import { Wrapper } from './Item.styles'

type Props = {
   item: CartItemType
   handleAddToCart: (clickedItem: CartItemType) => void  // 값을 반환하지 않는 함수
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
   <Wrapper>
      <img src={item.image.replace('https://fakestoreapi.com/', 'https://fakestoreapi.herokuapp.com/')} alt={item.title} />
      <div>
         <h3>{item.title}</h3>
         <p>{item.description}</p>
         <h3>${item.price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
   </Wrapper>
);

export default Item