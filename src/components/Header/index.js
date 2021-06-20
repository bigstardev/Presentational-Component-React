import React from "react";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="App-header">
            <Link to="/" className="popular-link">Popular</Link>
            <Link to="/favourite" className="favourite-link">Favourite</Link>
        </header>
    );
};

export default Header;
