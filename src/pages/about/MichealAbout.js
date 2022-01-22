import michealSvg from '../../assets/svg/background/micheal.svg'

const MichealAbout = (props)=>{
    return (
        <div className="w-auto bg-bee-purple p-8 md:p-16 flex-col">
            <div className="flex text-white flex-col md:flex-row gap-16">
                <div className='flex  flex-1 items-center justify-center'>
                    <img src={michealSvg} alt="" className='m-8 h-64 md:h-auto' />
                </div>
                <div className='flex flex-1 justify-center flex-col'>
                    <div className='text-2xl md:text-3xl font-semibold'>Meet</div>
                    <div className='text-5xl md:text-5xl font-bold'>MICHEAL</div>
                    <div className='mt-4'>Beekaboo is (Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ) </div>
                </div>
  
            </div>
        </div>
    )
}

export default MichealAbout