import { Link } from "react-router-dom"


const Header = () => {
    return (
        <div className="container py-5 mx-auto flex justify-between">
            <Link className="text-3xl text-white font-extrabold" to="/">Home</Link>
            <Link className="text-3xl text-white font-extrabold" to="/likes">Likes</Link>
        </div>
    )
}

export default Header