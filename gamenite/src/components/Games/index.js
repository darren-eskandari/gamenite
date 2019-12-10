import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'

// import { GAMES } from '../../constants/routes'

const Games = () => {

    const [ games, setGames ] = useState([])
    const [ search, setSearch ] = useState(['Catan'])
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            const games = await(await fetch(`https://www.boardgameatlas.com/api/search?name=${search}&client_id=${process.env.REACT_APP_BGA_API_KEY}`)).json()

            setGames(games.results)
            setTimeout(() => setIsLoading(false), 300)
        }
        fetchData()
    }, [search])

    const doGetGames = async () => {

        try {

            const games = await(await fetch(`https://www.boardgameatlas.com/api/search?name=${search}&client_id=${process.env.REACT_APP_BGA_API_KEY}`)).json()

            setGames(games.name)

        } catch (error) {
            console.log(error)
        }

        console.log(search)
    }

    return (
        <div className="game-search">
            {
                isLoading
                    ? <BeatLoader 
                        loading={isLoading}
                    />
                    : <div>
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
            }  
        </div>
    )

}


export default Games