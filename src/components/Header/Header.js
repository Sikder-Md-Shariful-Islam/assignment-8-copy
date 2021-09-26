import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className= 'header container bg-success'>
            <div className="container">
                <h1>Hire Singers for Concert</h1>
                <p><strong>Best Singers of America</strong></p>
                <h1>Total Budget: <strong>200 Billion</strong></h1>
            </div>
        </div>
    );
};

export default Header;