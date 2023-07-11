import Myday from "./Myday";
import NewPostForm from "./NewPostForm";

export default function NewsfeedHeader({setPost}){
    return (
        <>
            <div className="newsfeed flex-column stories-wrapper">
                <ul className="flex-row stories-header">
                    <li ><a href="#!">Stories</a>
                    <div className="border-blue"></div></li>
                    <li className="hover2"><a href="#!">Reels</a></li>
                    <li className="hover2"><a href="#!">Rooms</a></li>
                </ul>
                <Myday/>
            </div>

            <div className="newsfeed flex-column header-whats">
                <NewPostForm setPost={setPost}/>
                <div className="flex-row interact mind">
                    <div className="flex-row interact-icons ii1">
                        <img src="images/live-vid.png" alt=""/>
                        <p className="live-video">Live video</p>
                    </div>
                    <div className="flex-row interact-icons ii2">
                        <img src="images/photo.png" alt=""/>
                        <p id="photo">Photo/Video</p>
                    </div>
                    <div className="flex-row interact-icons ii3">
                        <img src="images/happy.png" alt=""/>
                        <p>Feeling/activity</p>
                    </div>
                </div>
            </div>
        </>
    )
}
