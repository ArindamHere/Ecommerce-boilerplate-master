import React from 'react'
import { Link } from 'react-router-dom'

function CartItem(props) {
    const { cart } = props;
    return (
        <div class="card">
            <div class="row">
                <div class="col-md-10 cart">
                    <div class="row border-top border-bottom">
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" src={cart.image} /></div>
                            <div class="col">
                                <div class="row text-muted">Shirt</div>
                                <div class="row">{cart.title}</div>
                                <h5 className="card-title"><i class="fa fa-inr"></i> {cart.amount}</h5>
                            </div>
                            <div class="col">
                                <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default CartItem
