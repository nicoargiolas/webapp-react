import axios from 'axios'
import { useState, useEffect } from "react"

import MovieCard from './../components/MovieCard';


const HomePage = () => {

    const [movies, setMovies] = useState([]);

    const fetchMovies = () => {
        axios.get("http://localhost:3000/movies")
            .then(
                res => {
                    setMovies(res.data)
                }
            )
            .catch(err => console.log(err)
            )
    }

    useEffect(fetchMovies, [])

    const renderMovies = () => {
        return movies.map(
            movie => {
                return (
                    <div key={movie.id} >
                        <MovieCard movieProp={movie} />
                    </div>
                )
            }
        )
    }

    return (
        <>
            <h1>MOVIES</h1>

            <div>
                {renderMovies()}
            </div>
        </>
    )
}

export default HomePage