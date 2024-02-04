
import React from 'react'
import {
  Route,
  Routes
} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login'
import Register from './components/Register';
import UserState from './context/user/UserState';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Details from './components/Details';
import ProductState from './context/product/ProductState';

function App() {
  return (
    <>
      <UserState>
        <ProductState>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path='/'
                element={<Home />}
              />
              <Route path='/login'
                element={<Login />}
              />
              <Route path='/register'
                element={<Register />}
              />
              <Route path='/cart'
                element={<Cart />}
              />
              <Route path='/wishlist'
                element={<Wishlist />}
              />
              <Route path='/details'
                element={<Details />}
              />
              <Route path='/logout'
                element={<Login />}
              />
            </Routes>
          </div>
        </ProductState>
      </UserState>

    </>
  )
}

export default App

