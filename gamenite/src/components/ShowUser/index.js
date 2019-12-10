import React, { Component } from 'react'

class ShowUser extends Component {

    state = {
        name: ""
    }
    
    componentDidMount() {
        console.log(this.props.match.params.id)
    }
    render() {
        return(
            <div className="user-show">
                <h1>User hello</h1>
            </div>
        )
    }
}

export default ShowUser