import React, { useEffect } from 'react'
import { Link, useLocation } from "react-router-dom"
function Navbar() {
    let location = useLocation();

    useEffect(() => {
        // Google Analytics
        console.log(location.pathname);
    }, [location]);
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">ShopKart</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-2 flex-grow-1">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>

                        </ul>

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-2">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/wishlist" ? "active" : ""}`} to="/wishlist"><i class="fa-regular fa-heart fa-xl" style={{ color: "#ff0000" }}></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/login" ? "active" : ""}`} to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/cart" ? "active" : ""}`} to="/cart"><i class="fa-solid fa-cart-plus fa-xl" style={{ color: "#ffff80" }}></i></Link>
                            </li>
                        </ul>



                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar
