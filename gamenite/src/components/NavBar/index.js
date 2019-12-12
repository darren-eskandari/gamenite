import React from "react";
import { NavLink } from 'react-router-dom'
import * as ROUTES from '../../constants/routes';

import './NavBar.css'


const NavBar = () => {
    return(
        <div className="nav">
            <NavLink className="nav-link" to={ROUTES.HOME}>Home</NavLink>
            <NavLink className="nav-link" to={ROUTES.LOGIN}>Login</NavLink>
            <NavLink className="nav-link" to={ROUTES.SIGN_UP}>Signup</NavLink>
            <NavLink className="nav-link" to={ROUTES.GAMES}>Games</NavLink>
        </div>
    )
}

export default NavBar