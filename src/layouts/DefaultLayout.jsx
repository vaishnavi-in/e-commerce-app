
import {Outlet} from 'react-router-dom'
import Header from '../components/Header/Header'
import '../index.css'

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer><p>© 2025 ShopEase</p></footer>
    </div>
  )
}

export default DefaultLayout
