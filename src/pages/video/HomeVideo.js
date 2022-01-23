import bgblue from "../../assets/background/bg-blue.svg";
import chickenSvg from "../../assets/svg/undraw/chicken.svg"

const HomeVideo = (props)=>{
    return (
        <div  className="h-screen w-screen text-bee-white"  style={{
            backgroundImage: `url(${bgblue})`,
            height: '100vh',
            fontFamily: 'Sniglet',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }} >
            <div style={{ height: '80vh'}} className="flex gap-16 items-center md:px-16 px-8 pt-16 flex-row-reverse">
                <div className="flex-1 justify-center flex w-full items-center">
                    <img src={chickenSvg} alt=""  />
                </div>
                <div className="flex-1  flex flex-col">
                    <div className="text-5xl">
                    NOW SHOWING !!!
                    </div>
                    <div className="text-lg mt-6">
                    SPECIAL EPISODE ...........Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeVideo;