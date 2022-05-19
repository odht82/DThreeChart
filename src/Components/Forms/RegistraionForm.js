import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Loading from '../Loading/Loading';

const RegistrationForm = () => {
    const { user, registerUser, isLoading, authError } = useAuth();

    const history = useNavigate();

    const [formValues, setFormValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        checkbox: false
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    const handleChangeChk = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleRegSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        registerUser(formValues.email, formValues.password, formValues.username, formValues.phone, history);
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors, formValues, isSubmit]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
        }

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "Put a valid email";
        }

        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 5) {
            errors.password = "Password must be more than 6 characters";
        }

        if (!values.confirmPassword) {
            errors.confirmPassword = "Confirm your Password";
        } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "not matched your password";
        }

        if (!values.phone) {
            errors.phone = "phone number is required";
        } else if (values.phone.length > 11) {
            errors.phone = "phone number must be 11 characters";
        } else if (values.phone.length < 11) {
            errors.phone = "phone number must be 11 characters";
        }

        if (!values.checkbox) {
            errors.checkbox = "without checking you cant register";
        }
        return errors;
    };
    console.log(formValues.checkbox)
    return (
        <div className='form'>
            <p className='form__heading'>Create an account</p>
            {!isLoading &&
                <form className='f-body' onSubmit={handleRegSubmit}>
                    <div className="f-body__input">
                        <p className="f-body__label">Your Email</p>
                        <input
                            className='f-body__field'
                            type="text"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </div>
                    <p className='f-body__error'>{formErrors.email}</p>

                    <div className="f-body__input">
                        <p className="f-body__label">Your Password</p>
                        <input
                            className='f-body__field'
                            type="password"
                            name="password"
                            value={formValues.password}
                            onChange={handleChange}
                        />
                    </div>
                    <p className='f-body__error'>{formErrors.password}</p>

                    <div className="f-body__input">
                        <p className="f-body__label">Confirm Your Password</p>
                        <input
                            className='f-body__field'
                            type="password"
                            name="confirmPassword"
                            value={formValues.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <p className='f-body__error'>{formErrors.confirmPassword}</p>

                    <div className="f-body__input">
                        <p className="f-body__label">Your Full Name</p>
                        <input
                            className='f-body__field'
                            name="username"
                            type='text'
                            value={formValues.username}
                            onChange={handleChange}
                        />
                    </div>
                    <p className='f-body__error'>{formErrors.username}</p>

                    <div className="f-body__input">
                        <p className="f-body__label">Your Phone number</p>
                        <input
                            className='f-body__field'
                            type='tel'
                            name="phone"
                            onChange={handleChange}
                        />
                    </div>
                    <p className='f-body__error'>{formErrors.phone}</p>

                    <div className="f-body__check">
                        <input
                            type="checkbox"
                            onChange={handleChangeChk}
                            defaultChecked={false}
                            value={true}
                            className='f-body__checkbox'
                            name="checkbox"
                            id="agree" />
                        <p className="f-body__agree">I read and agree Terms and Conditions</p>
                    </div>
                    <p className='f-body__error'>{formErrors.checkbox}</p>

                    <button className='f-body__button' type="submit" >Register</button>
                    <p className="f-body__label">.</p>
                    <div className="f-body__input">
                        <p className="f-body__label">Already Registered?</p>
                        <Link
                            style={{ textDecoration: 'none' }}
                            to="/auth/login">
                            <button
                                className='f-body__button f-body__button--switch'>Login</button>
                        </Link>
                    </div>
                </form>}

            {isLoading && <Loading />}
            {user?.email && <p className='f-body__success'>User Created successfully!</p>}
            {authError && <p className='f-body__error'>{authError}</p>}
        </div>
    );
};

export default RegistrationForm;



