import React from 'react';
import './header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul className="menu-link">
                <li><a href="/Shop">Shop</a></li>
                <li><a href="/Order">Order</a></li>
                <li><a href="/Inventory">Manage Inventory</a></li>
                <li><a href="/Log_In">Log In</a></li>
            </ul>
        </nav>
    );
};

export default Header;