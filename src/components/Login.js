import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
    const [email, emailupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const navigate = useNavigate();
    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const proceedLogin = async (e) => {
        e.preventDefault();
        if (validate()) {
            ///implentation
            // console.log('proceed');
            await fetch(`http://localhost:5000/users?email=${email}`).then((res) => {
                return res.json();
            }).then((resp) => {
                // console.log(resp[0])
                if (Object.keys(resp).length === 0) {
                    toast.error('Please Enter valid username');
                } else {
                    if (resp[0].password === password) {
                        toast.success('Success');
                        sessionStorage.setItem('email', resp.email);
                        sessionStorage.setItem('password', resp.password);
                        navigate('/');
                    } else {
                        toast.error('Please Enter valid credentials');
                    }
                }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }


    const validate = () => {
        let result = true;
        if (email === '' || email === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }

    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
                <form onSubmit={proceedLogin} className="container">
                    <div className="card">
                        <div className="card-header">
                            <h2>User Login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Email <span className="errmsg">*</span></label>
                                <input value={email} onChange={e => emailupdate(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Password <span className="errmsg">*</span></label>
                                <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} className="form-control"></input>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary mx-3">Login</button>
                            <Link className="btn btn-success " to={'/register'}>New User</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
