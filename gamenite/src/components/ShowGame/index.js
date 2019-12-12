import React, { Component } from 'react'
import { BeatLoader } from 'react-spinners'



class ShowGame extends Component {

    state = {
        name: "",
        img: "", //imgURL
        minPlayers: "",
        maxPlayers: "",
        minPlaytime: "",
        maxPlaytime: "",
        description: "",
        description_preview: "",
        // gameId: "",
    }

    async componentDidMount() {
        const gameId = this.props.match.params.id
        const resGame = await fetch(`https://www.boardgameatlas.com/api/search?ids=${gameId}&client_id=${process.env.REACT_APP_BGA_API_KEY}`)

        

        const gameJson = await resGame.json()
        // console.log(gameJson)
        // console.log(gameJson.games[0].name)

        this.setState({
            name: gameJson.games[0].name,
            img: gameJson.games[0].images.medium,
            minPlayers: gameJson.games[0].min_players,
            maxPlayers: gameJson.games[0].max_players,
            minPlaytime: gameJson.games[0].min_playtime,
            maxPlaytime: gameJson.games[0].max_playtime,
            description: gameJson.games[0].description,
            description_preview: gameJson.games[0].description_preview,
        })
    }


    render() {
        return (
            <div className="show-game">
                <div className="game-header">
                    <h3>{this.state.name}</h3>
                    Add to Library
                </div>
                <div className="game-img">
                    <img src={this.state.img} alt="preview" />
                </div>
                <div className="game-info">
                    Players: {this.state.minPlayers}-{this.state.maxPlayers}
                    <br/>
                    Average Playtime: {this.state.minPlaytime}-{this.state.maxPlaytime}
                </div>
                <div className="game-desc">
                    {this.state.description_preview}
                </div>
            </div>
        )
    }
}

export default ShowGame
