import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PaintSvg from '../../assets/svg/undraw/paint.svg'
const VideoPage = (props) =>{
    return (
        <div style={{
            fontFamily: 'Sniglet'
        }} className="p-8 text-white md:p-16 flex flex-col items-center justify-center">
                <div className="md:text-5xl text-4xl text-center">Other Video in Special Episode</div>
                <div className="text-lg mt-6">
                    <div className='flex items-center bg-white flex-row gap-2 px-6 py-1 rounded-full'>
                        <input type="text" placeholder='Search video ...' className='flex-grow text-gray-400 bg-transparent outline-none' />
                        <FontAwesomeIcon icon={faSearch} className='text-gray-400'/>
                    </div>
                </div>
                <div className='mt-12'>
                    <img src={PaintSvg} alt="" />
                </div>
        </div>
    )
}

export default VideoPage