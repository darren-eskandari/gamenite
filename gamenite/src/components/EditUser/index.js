import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'


class EditUser extends Component {

    state = {
        user: {},
        dob: '',
        location: '',
        bio: ''
    }
    
    async componentDidMount() {
       const user = await fetch(`/auth/users/${this.props.match.params.id}`)
       const userToJson = await user.json()
    //    console.log(userToJson)
       this.setState({
           user: userToJson[0]
       })
    }

    handleEdit = async(e) => {
        e.preventDefault()
        console.log('hitting edit', this.state)
        const editData = {
            dob: this.state.dob,
            location: this.state.location,
            bio: this.state.bio
        }
        const editedUser = await fetch(`/auth/users/${this.props.currentUser._id}`, {
            method: "PUT",
            body: JSON.stringify(editData),
            headers: {
                'Content-Type': 'application/json'
              },
        })
        const editedUserToJson = await editedUser.json()
        console.log(editedUserToJson)
        this.props.history.push(`${ROUTES.USERS}/${this.props.match.params.id}`)
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    render() {
        return (
            <div className="user-edit">
                <Link to={`${ROUTES.USERS}/${this.state.user.uid}`}>Cancel</Link>
                <form className="edit-user-form" onSubmit={this.handleEdit}>

                    <div className="avatar">
                        <img src="" alt="user pic"/>
                    </div>
                    
                    <div className="user-info">
                        <div className="user-info-keys-column">
                            <div className="user-info-key" >
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

                        <div className="user-info-vals-column">
                            <div className="user-info-val">
                                {/* <input 
                                    className="user-edit-input"
                                    type="text"
                                    name="displayName"
                                    onChange={this.handleChange}
                                    value= */}
                                    { this.state.user.displayName }
                                {/* /> */}
                            </div>
                            <div className="user-info-val">
                                {/* <input 
                                    className="user-edit-input"
                                    type="email"
                                    name="email"
                                    onChange={this.handleChange} 
                                    value= */}
                                    { this.state.user.email }
                                {/* /> */}
                            </div>
                            <div className="user-info-val">
                                <input 
                                    className="user-edit-input"
                                    type="date"
                                    name="dob"
                                    onChange={this.handleChange}
                                    // placeholder={
                                    //     this.state.user.dob ?
                                    //     this.state.user.dob 
                                    // }
                                />
                            </div>
                            <div className="user-info-val">
                                <input 
                                    className="user-edit-input"
                                    type="text"
                                    name="location"
                                    onChange={this.handleChange}
                                    placeholder={
                                        this.state.user.location ?
                                        this.state.user.location :
                                        "location"
                                    }
                                />
                            </div>
                        </div>

                        <div className="user-info-bio-key">
                            About Me: 
                        </div>
                        <div className="user-info-bio-val">
                            <textarea 
                                className="user-edit-input"
                                name="bio"
                                onChange={this.handleChange}
                                placeholder={
                                    this.state.user.bio ?
                                    this.state.user.bio :
                                    "Enter bio here"
                                }
                            />
                        </div>
                        <input 
                            type="submit" value="Edit Profile"
                        />
                        <div className="user-library">
                            My Games: 
                            <div className="user-game">
                                (map of games)
                            </div>
                        </div>
                    </div>
                </form>
                        {/* <button type="submit">Delete Account</button> */}
            </div>
        )
    }
}

export default withRouter(EditUser)