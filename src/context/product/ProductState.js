import React from 'react'
import ProductContext from './productContext'
function ProductState() {

    const [products, setproducts] = useState([]);
    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:5000/products");
            const data = await response.json();
            setproducts(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <ProductContext.Provider value={0}>

        </ProductContext.Provider>
    )
}

export default ProductState
