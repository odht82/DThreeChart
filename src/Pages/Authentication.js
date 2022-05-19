import React from 'react';
import { Outlet } from 'react-router-dom';
import left from '../Assets/left.png'
import '../css/AuthenticationStyles.min.css'

const Authentication = () => {
    return (
        <div className='container'>
            <div className="container__left">
                <div className="left">
                    <img src={left} alt="chart" className="left__image" />
                    <p className="left__heading">Choose a date range</p>
                    <p className="left__description">Lorem ipsum dolor sit amet, consectetur,<br /> adipiscing elit. Mauris imperdiet bibendum.</p>
                </div>
            </div>
            <div className="container__right">
                <div className="right">
                    <div className="right__body">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Authentication;
