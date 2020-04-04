import React from 'react';
import { Link } from 'react-router-dom';

const headerStyles = {
    background: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px"
}

const linkStyles = {
    color: "#fff",
    textDecoration: "none",
    cursor: "pointer",
}

const Header = () => {
    return (
        <header style={headerStyles}>
            <h1>Todo List</h1>
            <Link style={linkStyles} to="/">Home</Link> | 
            <Link style={linkStyles} to="/about"> About</Link>
        </header>
    );
}

export default Header;