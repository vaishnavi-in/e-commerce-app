import { useSelector, useDispatch } from 'react-redux';
import './CartList.css';

const CartList = () => {
    const cartList = useSelector(state => state.product.cartItems)
    return (
        <div>
            <h2>Cart</h2>
            <div className='cartContainer'>
            {cartList.map(cartItem => {
                return (
                    <li key={cartItem.id} className='cartItem'>
                        <img
                            alttext={cartItem.title}
                            src={cartItem.image}
                            width="50"
                            height="50"
                        />
                        <div>
                            <div>{cartItem.title}</div>
                            <div>Rating: {cartItem.rating.rate} | {cartItem.rating.count}</div>
                        </div>
                        <div>${cartItem.price}</div>
                    </li>
                )
            })}
            <div className='total'>Total: ${cartList.reduce((acc, cur) => {
                return cur.price + acc
            }, 0)}</div>
            <div className='checkoutBtn'><button type='submit'>Checkout</button></div>
            </div>
        </div>
    )
}

export default CartList;