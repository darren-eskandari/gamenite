import React from "react";
import { NavLink, Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes';

import './navbar.css'


const NavBar = (props) => {
    return(
        <div className="nav">
            <div className="nav-left">
                <NavLink className="nav-link" to={ROUTES.HOME}>Home</NavLink>
                <NavLink className="nav-link" to={ROUTES.GAMES}>Games</NavLink>
            </div>

            <div className="nav-center">
                
            </div>

            <div className="nav-right">
               {
                   props.currentUser
                   ? <div>
                        <NavLink className="nav-link" to={`${ROUTES.USERS}/${props.currentUser.uid}`}>Welcome {props.currentUser.displayName}</NavLink>
                        <Link className="nav-link" onClick={props.signOut}>Sign Out</Link>
               </div>
                   : <div>
                        <NavLink className="nav-link" to={ROUTES.LOGIN}>Login</NavLink>
                        <NavLink className="nav-link" to={ROUTES.SIGN_UP}>Signup</NavLink>
                    </div>
               }
            </div>

        </div>
    )
}

export default NavBar