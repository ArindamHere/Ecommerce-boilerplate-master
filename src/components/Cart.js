import React, { useContext } from 'react'
import productContext from '../context/product/productContext';
import CartItem from './CartItem';

function Cart() {
    const context = useContext(productContext);
    const { carts, setcarts } = context;

    return (

        <div className='row d-flex justify-content-between align-items-center'>
            <div className="row my-3">
                <h5>Shopping Cart</h5>
                {carts.map((cart) => {
                    return <CartItem key={cart.id} cart={cart} />
                })}
            </div>

            <div class="col-md-4 summary">
                <div><h5><b>Summary</b></h5></div>
                <hr />
                <div class="row">
                    <div class="col">ITEMS 3</div>
                    <div class="col text-right">&euro; 132.00</div>
                </div>
                <form>
                    <p>SHIPPING</p>
                    <select><option class="text-muted">Standard-Delivery- &euro;5.00</option></select>
                    <p>GIVE CODE</p>
                    <input id="code" placeholder="Enter your code" />
                </form>
                <div class="row" style={{ borderTop: "1px solid rgba(0, 0, 0, .1)", padding: "2vh 0" }}>
                    <div class="col">TOTAL PRICE</div>
                    <div class="col text-right">&euro; 137.00</div>
                </div>
                <button class="btn">CHECKOUT</button>
            </div>
        </div>


    )
}

export default Cart
