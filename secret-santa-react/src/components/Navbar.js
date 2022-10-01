import React from 'react';
import {  NavLink, } from 'react-router-dom';

const Navbar = ({connect,setConnect}) => {

    const logout = () => {
        localStorage.removeItem('connectUser')
        setConnect(false)
    }

    console.log(connect)
    return (
        <>
            {connect === true
                ? <header className="App-header">
                    <nav className="navbar">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/profile">Profile</NavLink>
                    </nav>
                    <nav className="navLog">
                        <NavLink to="/login" onClick={logout}>Deconnexion</NavLink>
                    </nav>
                </header>
                : <header className="App-header">
                    <nav className="navbar">
                    </nav>
                    <nav className="navLog">
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/register" >Register</NavLink>
                    </nav>
                </header>
            }
        </>
    )
}

export default Navbar;