import { Link } from 'react-router-dom';
export default function NavBar () {
    return (
        <div className="bar" id="navbar">
            <Link to="/">Home</Link>
            <Link to="discover">Discover</Link>
            <Link to ="create-post">New Post</Link>
        </div>
    )
}