import MappersContainer from "./MappersContainer";
import NotificationsContainer from "./NotificationsContainer";

export default function Homepage () {
    return (
        <div className="page" id="home-page">
            <h3>Homepage</h3>
            <MappersContainer />
            <NotificationsContainer />
        </div>
    )
}