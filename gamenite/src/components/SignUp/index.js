import React, { Component } from 'react'
import { doCreateUser } from '../../firebase/firebase'
import { withRouter } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

class SignUp extends Component {

    state = {
        email: '',
        password: '',
        confirmPassword: '',
        error: null,
        displayName: ''
    }

    onChange = e =>
        this.setState({
            [e.target.name]: e.target.value
        })

    onSubmit = e => {
        e.preventDefault()
        const { email, password, displayName } = this.state
        doCreateUser(email, password)
            .then(async authUser => {
                console.log(authUser)
                const user = {
                    email,
                    displayName,
                    uid: authUser.user.uid
                }
                const createdUser = await fetch('/auth/users', {
                    method: "POST",
                    body: JSON.stringify(user),
                    headers: {
                        'Content-Type': 'application/json'
                      },
                })
                const createdUserToJson = await createdUser.json()
                this.props.doSetCurrentUser(createdUserToJson)
                this.props.history.push(ROUTES.HOME)
            })
            .catch(error => {
                this.setState({ error });
            });
    }
        
    render() {
    
        const { email, password, confirmPassword, error, displayName } = this.state
        const isInvalid =
            password !== confirmPassword ||
            password === '' ||
            email === ''

        return (
            <div className="sign-up">
                Sign Up
                <form onSubmit={this.onSubmit}>
                    <input type='text' name='email' value={email} placeholder="EMAIL" onChange={this.onChange}/>
                    <input type='text' name='displayName' value={displayName} placeholder="DISPLAY NAME" onChange={this.onChange}/>
                    <input type='text' name='password' value={password} placeholder="PASSWORD" onChange={this.onChange}/>
                    <input type='text' name='confirmPassword' value={confirmPassword} placeholder="PASSWORD" onChange={this.onChange}/>
                    <input type='submit' value='submit' disabled={isInvalid}/>
                    {error && <p>{error.message}</p>}
                </form>
            </div>
        )
    
    }

}


export default withRouter(SignUp)
