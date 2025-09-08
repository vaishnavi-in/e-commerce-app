
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import About from './pages/About/About'
import DefaultLayout from "./layouts/DefaultLayout"

function App() {
  return (
    <div>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
