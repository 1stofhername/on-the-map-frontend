import MappersContainer from "./MappersContainer";
import NotificationsContainer from "./NotificationsContainer";

export default function Homepage ({ user, isLoggedIn }) {

    return (
        <div className="page" id="home-page">
            {isLoggedIn?
            <div className="content-container">
                <h2>Hello {user.first_name}</h2>
                <NotificationsContainer />
                <MappersContainer id={user.id} />
            </div>:null}
        </div>
    )
}