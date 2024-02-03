
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

function App() {
  return (
    <>
      <UserState>
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
      </UserState>

    </>
  )
}

export default App

