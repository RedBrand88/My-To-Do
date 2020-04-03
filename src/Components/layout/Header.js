import React from 'react';

const headerStyles = {
    background: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px"
}

const Header = () => {
    return (
        <header style={headerStyles}>
            <h1>Todo List</h1>
        </header>
    );
}

export default Header;