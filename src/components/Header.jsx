import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className="navbar">
            <div>
                <Link to="/">MOVIES</Link>
            </div>
        </nav>
    )
}

export default Header