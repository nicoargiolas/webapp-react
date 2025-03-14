import axios from 'axios'
import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

import ReviewCard from '../components/ReviewCard'
import ReviewForm from '../components/ReviewForm'

const MoviePage = () => {

    const { id } = useParams();
    const redirect = useNavigate();

    const [movie, setMovie] = useState({});

    const fetchMovie = () => {
        axios.get("http://localhost:3000/movies/" + id)
            .then(
                res => {
                    setMovie(res.data)
                })

            .catch(err => {
                console.log(err);
                if (err.status === 404) redirect("/404")
            })
    }

    const renderReviews = () => {
        return movie.reviews?.map(
            review => <ReviewCard key={review.id} reviewProp={review} />
        )
    }

    useEffect(fetchMovie, [])

    return (
        <>
            <header className="movie">
                <div>
                    <img className="movie-img" src={movie.image} alt={movie.title} />
                    <div>
                        <h2>{movie.title}</h2>
                        <h4> {movie.director} </h4>
                        <p> {movie.abstract} </p>
                    </div>
                </div>
            </header>

            <section id="reviews">
                <header>
                    <h4>Recensioni</h4>
                </header>
                {renderReviews()}
            </section>

            <section>
                <ReviewForm movie_id={movie.id} realoadReviews={fetchMovie} />
            </section>

            <footer>
                <Link className="btn" to="/">Torna alla Home</Link>
            </footer>
        </>
    )
}

export default MoviePage