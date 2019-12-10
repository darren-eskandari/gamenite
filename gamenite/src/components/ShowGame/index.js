import React, { Component } from 'react'

class ShowGame extends Component {

    state = {
        name: ""
    }

    async componentDidMount() {
        const gameId = this.props.match.params.id
        const resGame = await fetch(`https://www.boardgameatlas.com/api/search?ids=${gameId}&client_id=${process.env.REACT_APP_BGA_API_KEY}`)

        

        const gameJson = await resGame.json()
        console.log(gameJson)
    }


    render() {
        return (
            <div className="show-game">
                Show Game
            </div>
        )
    }
}

export default ShowGame
