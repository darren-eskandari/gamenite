import React, { Component } from 'react'

class ShowGame extends Component {

    async componentDidMount() {
        const gameId = this.props.match.params.id
        
        const resGame = await fetch(`GET https://www.boardgameatlas.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_BGA_API_KEY}`)
        const gameJson = await resGame.json()
        console.log(gameJson)
    }


    render() {
        return (
            <div>
                Show Movie
            </div>
        )
    }
}

export default ShowGame
