import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className="navbar">
            <div>
                <Link to="/">MOVIES</Link> <br />
                <Link to="/movies/add">Aggiungi film</Link>
            </div>
        </nav>
    )
}

export default Header