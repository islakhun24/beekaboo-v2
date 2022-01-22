import HomeLearningZone from "../pages/learning-zone/HomeLearningZone";
import LearningZone from "../pages/learning-zone/LearningZone";

const LearningZoneViews = (props) =>{
    return (
        <div className="h-auto w-screen bg-bee-pink-old">
            <HomeLearningZone/>
            <LearningZone/>
        </div>
    )
}

export default LearningZoneViews;