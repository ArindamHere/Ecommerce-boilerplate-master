
import React from 'react'
import {
  Route,
  Routes
} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login'
import Register from './components/Register';
import UserState from './context/UserState';

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
          </Routes>
        </div>
      </UserState>

    </>
  )
}

export default App

