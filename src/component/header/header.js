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
                <li><a href="/order">Order</a></li>
                <li><a href="/Order reviwe">Order reviwe</a></li>
                <li><a href="/Manage Inventory">Manage Inventory</a></li>
                <li><a href="/Log In">Log In</a></li>
            </ul>
        </nav>
    );
};

export default Header;