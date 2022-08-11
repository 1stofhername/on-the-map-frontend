import MappersContainer from "./MappersContainer";
import NotificationsContainer from "./NotificationsContainer";

export default function Homepage () {
    return (
        <div className="page" id="home-page">
            <div className="content-container">
                <NotificationsContainer />
                <MappersContainer />
            </div>
        </div>
    )
}