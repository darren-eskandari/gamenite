import React, { Component } from 'react'

class ShowUser extends Component {

    state = {
        displayName: '',
        imgUrl: '',
        location: '',
        dob: '',
        phone: '',
        bio: '',
        library: [],
        friends: [],
        friendRequests: [],
        events: [],
    }
    
    componentDidMount() {
        console.log(this.props.match.params.id)
    }

    render() {
        return(
            <div className="user-show">
                <div className="avatar">
                    <img src="" alt="user pic"/>
                </div>
                <div className="user-info">
                    Display Name: { this.state.displayName }
                    <br/>
                    Birthday: { this.state.dob }
                    <br/>
                    Location: { this.state.location }
                    <br/>
                    About Me: { this.state.bio }
                    <br/>
                    My Games: 
                    <br/>
                    
                </div>
            </div>
        )
    }
}

export default ShowUser