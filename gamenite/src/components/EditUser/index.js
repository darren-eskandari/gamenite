import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'


class EditUser extends Component {

    state = {
        user: {}
    }
    
    async componentDidMount() {
       const user = await fetch(`/auth/users/${this.props.match.params.id}`)
       const userToJson = await user.json()
    //    console.log(userToJson)
       this.setState({
           user: userToJson[0]
       })
    }

    render() {
        return (
            <div className="user-edit">
                <Link to={`${ROUTES.USERS}/${this.state.user.uid}`}>Cancel</Link>
                    
                <div className="avatar">
                    <img src="" alt="user pic"/>
                </div>
                
                <div className="user-info">
                    <div class="user-info-keys-column">
                        <div className="user-info-key">
                            Display Name: 
                        </div>
                        <div className="user-info-key">
                            Email: 
                        </div>
                        <div className="user-info-key">
                            Birthday: 
                        </div>
                        <div className="user-info-key">
                            Location: 
                        </div>
                    </div>

                    <div class="user-info-vals-column">
                        <form className="edit-user-form">
                            <div className="user-info-val">
                                <input 
                                    className="user-edit-input"
                                    type="text"
                                    name="displayName"
                                    onChange={this.handleChange}
                                    value={ this.state.user.displayName }
                                    />
                            </div>
                            <div className="user-info-val">
                                <input 
                                    className="user-edit-input"
                                    type="text"
                                    name="displayName"
                                    onChange={this.handleChange}
                                    value={ this.state.user.email }
                                    />
                            </div>
                            <div className="user-info-val">
                                <input 
                                    className="user-edit-input"
                                    type="text"
                                    name="displayName"
                                    onChange={this.handleChange}
                                    value={ this.state.user.dob }
                                    />
                            </div>
                            <div className="user-info-val">
                                <input 
                                    className="user-edit-input"
                                    type="text"
                                    name="displayName"
                                    onChange={this.handleChange}
                                    value={ this.state.user.location }
                                />
                            </div>
                            <input 
                                type="submit" value="Edit Profile"
                            />
                        </form>
                    </div>

                    <div className="user-info-bio-key">
                        About Me: 
                    </div>
                    <div className="user-info-bio-val">
                        { this.state.user.bio }
                    </div>
                    <div className="user-library">
                        My Games: 
                        <div className="user-game">
                            (map of games)
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(EditUser)