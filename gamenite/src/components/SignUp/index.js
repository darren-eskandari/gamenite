import React, { Component } from 'react'
import { doCreateUser } from '../../firebase/firebase'

import * as ROUTES from '../../constants/routes'

class SignUp extends Component {

    state = {
        email: '',
        password: '',
        confirmPassword: '',
        error: null
    }

    onChange = e =>
        this.setState({
            [e.target.name]: e.target.value
        })


    render() {
    
        const { email, password, confirmPassword, error } = this.state
        const isInvalid =
            password !== confirmPassword ||
            password === '' ||
            email === ''
            
        return (
            <div className="sign-up">
                Sign Up
                <form onSubmit={this.onSubmit}>
                    <input type='text' name='email' value={email} placeholder="EMAIL" onChange={this.onChange}/>
                    <input type='text' name='password' value={password} placeholder="PASSWORD" onChange={this.onChange}/>
                    <input type='text' name='confirmPassword' value={confirmPassword} placeholder="PASSWORD" onChange={this.onChange}/>
                    <input type='submit' value='submit' disabled={isInvalid}/>
                    {error && <p>{error.message}</p>}
                </form>
            </div>
        )
    
    }

}


export default SignUp
