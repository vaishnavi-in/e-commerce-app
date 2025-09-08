import {NavLink, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const navigate =  useNavigate()
    const cartItems = useSelector(state => state.product.cartItems)
    return (
        <header>
            <div className='header'>
                <div className='cartItems'>{cartItems.length}</div>
                <img src="../src/assets/cart.svg" alt="cart" height={45} width={45} onClick={() => navigate('/cart')} />
            </div>
            <nav>
                <NavLink to="/" className={({isActive}) => isActive ? 'active-link' : ''}>Home</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? 'active-link' : ''}>About</NavLink>
            </nav>
        </header>
    )
}

export default Header