import { Link } from 'react-router-dom';
export default function NavBar () {
    return (
        <div className="component-bar" id="navbar">
            <h3>NavBar</h3>
            <Link to="home">Home</Link>
        </div>
    )
}