const fetchProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const result = await response.json();
        return result
    } catch(e) {
        console.log(e, 'error')
        return null
    }
}

export {fetchProducts}