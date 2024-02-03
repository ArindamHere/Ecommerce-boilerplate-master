import React, { useContext, useState } from 'react'
import userContext from '../context/userContext'

function Register() {

    const context = useContext(userContext);
    const { addUser } = context;

    const [user, setUser] = useState({ email: "", name: "", password: "" })

    const handleAddUser = (e) => {
        e.preventDefault();
        addUser(user.email, user.name, user.password);
    }

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" placeholder="Enter Your Email Id" onChange={onChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter Your Full Name" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name='password' placeholder="Enter Password" onChange={onChange} />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={handleAddUser}>Submit</button>
                </form>
            </div>
        </div>

    )
}

export default Register
