import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <NavLink to="/university">University</NavLink>
                <NavLink to="/services">Details</NavLink>
                <NavLink to="/faculty">Faculty</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </div>
    );
};

export default Header;