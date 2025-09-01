
import {Routes, Route, NavLink, useNavigate} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import About from './pages/About/About'
import './index.css'
import { useSelector } from 'react-redux'

function App() {
  const navigate =  useNavigate()
  const cartItems = useSelector(state => state.product.cartItems)
  return (
    <>
    <div className='header'>
      <div className='cartItems'>{cartItems.length}</div>
      <img src="../src/assets/cart.svg" alt="cart" height={45} width={45} onClick={() => navigate('/cart')} />
    </div>
    <div>
        <nav>
          <NavLink to="/" className={({isActive}) => isActive ? 'active-link' : ''}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'active-link' : ''}>About</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </div>
    </>
  )
}

export default App
