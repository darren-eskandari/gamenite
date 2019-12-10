import React from "react";
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return(
        <div className="nav">
            <NavLink to={'home'}>Home</NavLink>
            <NavLink to={'login'}>Login</NavLink>
            <NavLink to={'signup'}>Signup</NavLink>
            <NavLink to={'games'}>Games</NavLink>
        </div>
    )
}

export default NavBar