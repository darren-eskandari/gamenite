import React, { Component } from 'react'

class ShowGame extends Component {

    state = {
        name: "",
        img: "",
        minPlayers: "",
        maxPlayers: "",
        minPlaytime: "",
        maxPlaytime: "",
        description: "",
        description_preview: "",
    }

    async componentDidMount() {
        const gameId = this.props.match.params.id
        const resGame = await fetch(`https://www.boardgameatlas.com/api/search?ids=${gameId}&client_id=${process.env.REACT_APP_BGA_API_KEY}`)

        

        const gameJson = await resGame.json()
        console.log(gameJson)
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
        console.log(this.state.name)
        return (
            <div className="show-game">
                <h3>{this.state.name}</h3>
                <img src={this.state.img} />
                Players: {this.state.minPlayers}-{this.state.maxPlayers}
                Average Playtime: {this.state.minPlaytime}-{this.state.maxPlaytime}
                <p>
                    {this.state.description_preview}
                </p>
            </div>
        )
    }
}

export default ShowGame
