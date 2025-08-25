import {useEffect} from 'react'
import {setProducts} from '../../store/productSlice'
import {useSelector, useDispatch} from 'react-redux'
import {fetchProducts} from '../../services/products'
import './ProductsList.css'

const ProductsList = () => {
  const productList = useSelector((state) => state.product.productsList)
  const dispatch = useDispatch()
  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts()
      console.log(products)
      dispatch(setProducts(products))
    }
    getProducts()
  }, [])
  return (
    <div className='listContainer'>
      {productList.map((product) => {
        return (
          <li key={product.id} className="productContainer">
            <img
              alttext={product.title}
              src={product.image}
              width="80"
              height="80"
            />
            <div>
              <div className='title'>{product.title}</div>
              <div>{product.description}</div>
              <div>Price: ${product.price}</div>
            </div>
          </li>
        )
      })}
    </div>
  )
}

export default ProductsList
