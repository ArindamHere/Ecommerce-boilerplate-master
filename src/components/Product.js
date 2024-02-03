import React, { useState, useEffect } from 'react'
import ProductItem from './ProductItem';

function Product() {

    const [products, setproducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/products");
                const data = await response.json();
                setproducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (

        <div className="row my-3">
            <h2>Your Tshirts</h2>
            {products.map((product) => {
                return <ProductItem key={product.id} product={product} />
            })}
        </div>

    )
}

export default Product
