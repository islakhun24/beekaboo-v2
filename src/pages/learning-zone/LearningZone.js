import PaintSvg from '../../assets/svg/undraw/paint.svg'
const LearningZone = (props) =>{
    return (
        <div style={{
            fontFamily: 'Sniglet'
        }} className="p-4 text-white md:p-16 flex flex-col items-center justify-center">
                <div className="text-5xl">Learning Zone</div>
                <div className="text-lg mt-6">Make your Creation</div>
                <div className='mt-12'>
                    <img src={PaintSvg} alt="" />
                </div>
        </div>
    )
}

export default LearningZone