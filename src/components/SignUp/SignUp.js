import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <form className='form-container'>
                <h3 className='form-title'>Sign up</h3>
                <div className="form-control">
                    <label className='' htmlFor="email">Email</label>
                    <input name='email' type="email" />
                </div>
                <div className="form-control">
                    <label className='' htmlFor="password">Password</label>
                    <input name='password' type="password" />
                </div>
                <div className="form-control">
                    <label className='' htmlFor="confirm">Confirm password</label>
                    <input name='confirm' type="password" />
                </div>
                <button className='btn-submit'>Login</button>

                <p className='switch-link'>Already have an account <Link to='/login'>Login</Link></p>
            </form>
        </div>
    );
};

export default SignUp;