import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ShowUser extends Component {

    state = {
        user: {}
    }
    
    async componentDidMount() {
       const user = await fetch(`/auth/users/${this.props.match.params.id}`)
       const userToJson = await user.json()
       console.log(userToJson)
       this.setState({
           user: userToJson[0]
       })
    }

    render() {
        return(
            <div className="user-show">
                edit user
                <div className="avatar">
                    <img src="" alt="user pic"/>
                </div>
                <div className="user-info">
                    Display Name: { this.state.user.displayName }
                    <br/>
                    Birthday: { this.state.user.dob }
                    <br/>
                    Location: { this.state.user.location }
                    <br/>
                    About Me: { this.state.user.bio }
                    <br/>
                    My Games: 
                    <br/>
                    <div>
                        (map of games)
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ShowUser)