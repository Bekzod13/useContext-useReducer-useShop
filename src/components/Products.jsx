import Product from './Product';

const Products = ({products}) => {
  return (
    <div className='container products'>
      {
        products.length === 0 ? 
          <h1>No product</h1>:
          products.map(item=>(
            <Product key={item.id} item={item} />
          ))
      }
    </div>
  )
}

export default Products