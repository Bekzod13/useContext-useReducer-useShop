import CartItem from './CartItem';
import useShop from '../contextApi/context';

const Cart = () => {
    
    const {products, clear, totalItems, allPrices} = useShop();

  return (
    <div className='container cart'>
        <div className="cart-items">
            {
                products.length === 0 ? 
                    <h2>Empty cart</h2>:
                    products.map(item=>(
                        <CartItem 
                            key={item.id} 
                            item={item} 
                        />
                    ))
            }
            {
                products.length !== 0 && 
                <div className="cart-item-remove" onClick={clear} >clear all</div>
            }
        </div>
        <div className="cart-counter">
            <h4>Total: {totalItems} products</h4>
            <p>${allPrices}</p>
            <div className="cart-total-buy-btn">buy now</div>
        </div>
    </div>
  )
}

export default Cart