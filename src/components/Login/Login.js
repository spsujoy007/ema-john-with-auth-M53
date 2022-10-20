import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div>
            <form className='form-container'>
                <h3 className='form-title'>Login</h3>
                <div className="form-control">
                    <label className='' htmlFor="email">Email</label>
                    <input name='email' type="email" />
                </div>
                <div className="form-control">
                    <label className='' htmlFor="password">Password</label>
                    <input name='password' type="password" />
                </div>
                <button className='btn-submit'>Login</button>

                <p className='switch-link'>New in ema john <Link to='/signup'>Sign up</Link></p>
            </form>
        </div>
    );
};

export default Login;