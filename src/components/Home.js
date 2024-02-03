import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Product from './Product';

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        let email = sessionStorage.getItem('email');
        if (email === '' || email === null) {
            navigate("/login");
        }
    }, []);

    return (
        <div>
            This is Home
            <Product />
        </div>
    )
}

export default Home
