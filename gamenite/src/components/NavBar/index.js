import React from "react";
import { NavLink } from 'react-router-dom'
import * as ROUTES from '../../constants/routes';


const NavBar = () => {
    return(
        <div className="nav">
            <NavLink to={ROUTES.HOME}>Home</NavLink>
            <NavLink to={ROUTES.LOGIN}>Login</NavLink>
            <NavLink to={ROUTES.SIGN_UP}>Signup</NavLink>
            <NavLink to={ROUTES.GAMES}>Games</NavLink>
        </div>
    )
}

export default NavBar