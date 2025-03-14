import { Link } from "react-router-dom"


const MovieCard = ({ movieProp }) => {

    const { id, title, director, genre, release_year, abstract, image } = movieProp;

    return (
        <div>
            {image && <img className="movie-img" src={image} alt={title} />}
            <div className="card-body">
                <h4 className="movie-title"> {title} </h4>
                <h6 className="movie-director"> {director} </h6>
                <span className="movie-details"> {genre} ({release_year})</span> <br />
                <p className="card-text">
                    {abstract}
                </p>
                <Link to={`movies/${id}`} className="btn">Dettagli</Link>
            </div>
        </div>
    )
}

export default MovieCard