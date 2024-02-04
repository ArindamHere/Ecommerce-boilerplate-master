import React, { useState } from 'react'
import ProductContext from './productContext'
import { toast } from "react-toastify";
function ProductState(props) {

    const [carts, setcarts] = useState([]);
    const [favourites, setfavourites] = useState([]);

    const addToCart = (id, title, image, amount) => {
        const cartItem = {
            "id": id,
            "title": title,
            "image": image,
            "amount": amount
        }

        setcarts(carts.concat(cartItem));
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(cartItem)
        }).then((res) => {
            toast.success('Product Added to Cart', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
            // navigate('/login');
        }).catch((err) => {
            toast.error('Failed :' + err.message);
        })
    }

    const addTofavourites = (id, title, image, amount) => {
        const fabItem = {
            "id": id,
            "title": title,
            "image": image,
            "amount": amount
        }
        setfavourites(favourites.concat(fabItem));
        fetch("http://localhost:5000/favourites", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(fabItem)
        }).then((res) => {
            toast.success('Product Added to Favourite', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
            // navigate('/login');
        }).catch((err) => {
            toast.error('Failed :' + err.message);
        })
    }



    return (
        <ProductContext.Provider value={{ carts, setcarts, favourites, setfavourites, addToCart, addTofavourites }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState
