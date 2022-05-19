import React from 'react';
import useAuth from '../Hooks/useAuth';
import Chart from './Chart/Chart';
import '../css/HomeStyles.min.css';

const Home = () => {
    const { logout } = useAuth();

    return (
        <div className='home'>
            <div className="home__heading">

                <h1 className='home__title'>Welcome to D3 Chart</h1>
                <button className='home__logout' onClick={logout}>logout</button>
            </div>
            <div className="home__body">
                <Chart></Chart>
            </div>
        </div>
    );
};

export default Home;