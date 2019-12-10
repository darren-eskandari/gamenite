import React, { Component } from 'react'
import { doSignIn } from '../../firebase/firebase'

import * as ROUTES from '../../constants/routes'

class Login extends Component {
    state = {
        email: '',
        password: '',
        error: null
    }

    onChange = e =>
        this.setState({
            [e.target.name]: e.target.value
        })

    onSubmit = e => {
        e.preventDefault()
        const { email, password } = this.state
        doSignIn(email, password)
            .then(authUser => {
                console.log('auth user object', authUser)
                console.log('auth user email', authUser.user.email)
                this.props.history.push(ROUTES.HOME)
            })
            .catch(error => {
                this.setState({ error });
            });
    }

    render() {
        const { email, password, error } = this.state

    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={this.onSubmit}>
                <input type='text' name='email' value={email} placeholder="EMAIL" onChange={this.onChange}/>
                <input type='text' name='password' value={password} placeholder="PASSWORD" onChange={this.onChange}/>
                <input type='submit' value='submit' />
                {error && <p>{error.message}</p>}
            </form>
        </div>
    )}
}

export default Login