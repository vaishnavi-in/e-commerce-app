
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'
import Home from './pages/Home/Home'
import './index.css'

function App() {
  return (
    <div>
      <Router>
        <nav>
          <NavLink to="/" className={({isActive}) => isActive ? 'active-link' : ''}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'active-link' : ''}>About</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
