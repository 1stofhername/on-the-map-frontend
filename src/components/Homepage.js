import MappersContainer from "./MappersContainer";
import DiscoverContainer from "./DiscoverContainer";

export default function Homepage ({ user, isLoggedIn }) {

    return (
        <div className="page" id="home-page">
            {isLoggedIn?
            <div className="content-container">
                <h2>Hello {user.first_name}</h2>
                <DiscoverContainer />
                <MappersContainer id={user.id} />
            </div>:null}
        </div>
    )
}