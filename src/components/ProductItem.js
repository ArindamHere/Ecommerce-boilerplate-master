import React from 'react'
import { Link } from 'react-router-dom';

function ProductItem(props) {

    const { product } = props;

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
                        <Link to="/wishlist" className='dark'>
                            <i class="fa-regular fa-heart fa-lg"></i>
                        </Link>
                        <Link to="/cart">
                            <i class="fa-solid fa-cart-shopping fa-lg"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
