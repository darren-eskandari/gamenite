import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'

import { GAMES } from '../../constants/routes'

import './games.css'

const Games = () => {

    const [ games, setGames ] = useState([])
    const [ search, setSearch ] = useState([''])
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {

        const fetchData = async () => {
            const games = await(await fetch(`https://www.boardgameatlas.com/api/search?name=${search}&limit=10&client_id=${process.env.REACT_APP_BGA_API_KEY}`)).json()

            setGames(games.games)
            setTimeout(() => setIsLoading(false), 300)
        }
        fetchData()
    }, [search])

    const doGetGames = async () => {
        try {
            setIsLoading(true)

            const games = await(await fetch(`https://www.boardgameatlas.com/api/search?name=${search}&fuzzy_match=true&client_id=${process.env.REACT_APP_BGA_API_KEY}`)).json()
            console.log(games)

            setGames(games.games)
            setTimeout(() => setIsLoading(false), 300)

        } catch (error) {
            console.log(error)
        }

        console.log(search)
    }

    

    return (
        <div className="games-container">
            {
                isLoading
                    ? <BeatLoader 
                        loading={isLoading}
                    />
                    : <div className="games">
                        <div className="game-search">
                            <input 
                                name='search' 
                                value={search} 
                                placeholder='Find a Game'
                                onChange={e => setSearch(e.target.value)}
                            />
                            <button onClick={() => doGetGames()} >
                                Find Game
                            </button>
                        </div>
                        {
                            games.map(game => 
                                <div className="game-results">
                                    <div className="game-header">
                                        {game.name}
                                        <br/>
                                        <small>Add to Library</small> 
                                    </div>
                                    <Link to={`${GAMES}/${game.id}`}>
                                        {
                                            game.thumb_url 
                                            &&
                                            <div className="games-thumb-container">
                                                <img src={game.thumb_url} className="game-thumb-img" alt="thumbnail" />
                                            </div>
                                        }  
                                    </Link>
                                </div>  
                            )
                        }
                </div>
            }  
        </div>
    )

}


export default Games