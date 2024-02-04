import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import productContext from '../context/product/productContext';

function ProductItem(props) {

    const { product } = props;
    const context = useContext(productContext);
    const { addToCart, addTofavourites } = context;

    const handleAddCart = (e) => {
        e.preventDefault();
        addToCart(product.id, product.title, product.image, product.amount);
    }

    const handleAddFavourite = (e) => {
        e.preventDefault();
        addTofavourites(product.id, product.title, product.image, product.amount);
    }


    return (
        <div className='col-md-3 my-3'>
            <div className="card" style={{ width: "18rem" }}>
                <Link to="/details">
                    <img src={product.image} style={{
                        width: "250px",
                        height: "350px"
                    }} className="card-img-top" alt={product.title.slice(0, 10)} />
                </Link>

                <div className="card-body">
                    <div className='my-3'>
                        <h5 className="card-title">{product.title}</h5>
                        <h5 className="card-title"><i class="fa fa-inr"></i> {product.amount}</h5>
                        <span class="badge text-bg-success">{product.rating}</span>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <button onClick={handleAddFavourite}>
                            <i class="fa-regular fa-heart fa-lg"></i>
                        </button>
                        <button onClick={handleAddCart}>
                            <i class="fa-solid fa-cart-shopping fa-lg"></i>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
