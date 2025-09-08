import {useEffect, useState} from 'react'
import {setProducts, addToCart} from '../../store/productSlice'
import {useSelector, useDispatch} from 'react-redux'
import {fetchProducts} from '../../services/products'
import './ProductsList.css'
import Loader from '../Loader/Loader'

const ProductsList = () => {
  const productList = useSelector((state) => state.product.productsList)
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const dispatch = useDispatch()
  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts()
      if(!products) {
        setIsError(true)
      } else {
        dispatch(setProducts(products))
      }
      setIsLoading(false)
    }
    getProducts()
  }, [])

  const handleAddToCartClick = (id) => {
    dispatch(addToCart(id))
  }

  if(isError) return <h2 className='noData'>No data</h2>

  return (
    isLoading ? <div className='loaderContainer'><Loader /></div> : <div className='listContainer'>
      {productList?.map((product) => {
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
            <button type='button' onClick={() => handleAddToCartClick(product.id)}>Add to cart</button>
          </li>
        )
      })}
    </div>
  )
}

export default ProductsList
