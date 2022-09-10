import useShop from "../contextApi/context";


const Product = ({item}) => {

  const {add} = useShop();

  return (
    <div className='product'>
      <div className="product-image">
        <img src={item.images[0]} alt={item.title} />
      </div>
      <h4>{item.title}</h4>
      <h5><i>${item.price}</i></h5>
      <div className="product-add-btn" onClick={()=>add(item)} >add to cart</div>
    </div>
  )
}

export default Product;