import React, { Component } from 'react'
import { doCreateUser } from '../../firebase/firebase'

import * as ROUTES from '../../constants/routes'

class SignUp extends Component {

    state = {
        email: '',
        password: '',
        confirmPassword: '',
        error: null,
        
    }

    

    render() {
    
        return (
            <div>
                Sign Up
            </div>
        )
    
    }

}


export default SignUp
