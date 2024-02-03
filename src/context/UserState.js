import React, { useState } from 'react';
import UserContext from './userContext';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserState = (props) => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const addUser = (email, name, password) => {
        const u = {
            "_id": Date.now(),
            "email": email,
            "password": password,
            "name": name
        }
        // setUser(user.concat(u));
        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(u)
        }).then((res) => {
            toast.success('Registered successfully.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
            navigate('/login');
        }).catch((err) => {
            toast.error('Failed :' + err.message);
        })
    }
    return (
        <UserContext.Provider value={{ user, addUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState
