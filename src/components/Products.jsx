import { useContext } from 'react';
import StateContext from '../contextApi/stateContext';
import Product from './Product';

const Products = ({products}) => {

  const {key} = useContext(StateContext);

  const searchProducts = () => {
    return products.filter(
      item=>
        item.title.toLowerCase().includes(key.toLowerCase())
        
    )
  }

  console.log(searchProducts, products);

  return (
    <div className='container products'>
      {
        searchProducts().length === 0 ? 
          <h1>No product</h1>:
          searchProducts().map(item=>(
            <Product key={item.id} item={item} />
          ))
      }
    </div>
  )
}

export default Products