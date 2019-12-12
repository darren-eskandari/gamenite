import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import { auth } from '../../firebase/firebase'


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

    handleDeleteUser = async (id) => {
        id.preventDefault()
        var deletedUser = auth.currentUser;
        console.log(deletedUser)
        deletedUser.delete().then(async () => {
            this.props.history.push(ROUTES.HOME)
            const deleteUser = await fetch(`/auth/users/${this.props.currentUser._id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                    },
            })
            
        }).catch(function(error) {
            console.log(error)
        });
        console.log('hitting delete for user ID:', this.props.currentUser._id)


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

                <div className="avatar">
                    <img src="" alt="user pic"/>
                </div>

                <form onSubmit={this.handleDeleteUser}>
                    <button type="submit">Delete Account</button>
                </form>
                    
                <form className="edit-user-form" onSubmit={this.handleEdit}>

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
                               { this.state.user.displayName }
                            </div>
                            <div className="user-info-val">
                                    { this.state.user.email }
                            </div>
                            <div className="user-info-val">
                                <input 
                                    className="user-edit-input"
                                    type="date"
                                    name="dob"
                                    onChange={this.handleChange}
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
                        
                        <button type="submit">Submit</button>

                        <div className="user-library">
                            My Games: 
                            <div className="user-game">
                                (map of games)
                            </div>
                        </div>

                    </div>

                </form>
            </div>
        )
    }
}

export default withRouter(EditUser)