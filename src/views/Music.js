import HomeMusic from "../pages/music/HomeMusic";
import SongMusic from "../pages/music/Songmusic";

const MusicViews = (props) =>{
    return (
        <div className="h-auto bg-bee-blue  w-screen">
            <HomeMusic/>
            <SongMusic/>
        </div>
    )
}

export default MusicViews;