import HomeAbout from "../pages/about/HomeAbout";
import MeetAbout from "../pages/about/MeetAbout";
import Meetclarisha from "../pages/about/Meetclarisha";
import MichealAbout from "../pages/about/MichealAbout";
import WhatIsAbout from "../pages/about/WhatIsAbout";

const AboutViews = (props) =>{
    return (
        <div className="h-auto bg-white w-screen">
            <HomeAbout/>
            <WhatIsAbout/>
            <MeetAbout/>
            <MichealAbout/>
            <Meetclarisha/>
        </div>
    )
}

export default AboutViews;