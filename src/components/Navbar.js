import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Navbar = () => {
    return (
        <div> <nav className="navbar">
           
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/skills">Skills</Link></li>
            
        </nav>
        
        </div>
    );
};

export default Navbar;