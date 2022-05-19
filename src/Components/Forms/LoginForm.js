import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import useAuth from '../../Hooks/useAuth';
import '../../css/FormStyle.min.css';

const LoginForm = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    console.log(user.email)
    const location = useLocation();
    const history = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        e.preventDefault();
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <div className="form">
            <p className='form__heading'>Login</p>
            <form className='f-body' onSubmit={handleLoginSubmit}>
                <div className="f-body__input">
                    <p className='f-body__label'>Your Email</p>
                    <input
                        className='f-body__field'
                        label="Your Email"
                        type='email'
                        name="email"
                        onChange={handleOnChange} />
                </div>
                <div className="f-body__input">
                    <p className='f-body__label'>Your Password</p>
                    <input
                        className='f-body__field'
                        label="Your Password"
                        type="password"
                        name="password"
                        onChange={handleOnChange} />
                </div>
                <button className='f-body__button' type="submit" >Login</button>
                <p className="f-body__label">.</p>
                <div className="f-body__input">
                    <p className="f-body__label">New User?</p>
                    <Link
                        to="/auth/registration">
                        <button
                            className='f-body__button f-body__button--switch'>Register</button>
                    </Link>
                </div>
                {isLoading && <Loading />}
                {user?.email && <p>Login successfully!</p>}
                {authError && <p>{authError}</p>}
            </form>
        </div>
    );
};

export default LoginForm;