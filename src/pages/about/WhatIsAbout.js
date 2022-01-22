import whatisBgSVG from '../../assets/svg/background/aboutwhatis.svg'
import productadvantagesSVG from '../../assets/svg/background/productadvantages.svg'
const WhatIsAbout = (props)=>{
    return (
        <div className="flex  flex-col w-screen h-auto p-8 md:p-16 bg-bee-pink-young">
            <div className="text-4xl text-bee-purple-old text-center md:text-5xl">
                What is Beekaboo
            </div>
            <div className="grid mt-16 gap-16 grid-cols-1 md:grid-cols-2">
                <div className='flex itemcenter justify-center col-span-1'>
                    <img src={whatisBgSVG} alt="" />
                </div>
                <div className='flex flex-col text-bee-purple-old'>
                    <div>Beekaboo is Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-4'>
                        <div className='col-span-1 flex flex-row gap-4 items-center'>
                            <div>
                                <img src={productadvantagesSVG} alt="" />
                            </div>
                            <div className='flex flex-col'>
                                <div className='font-semibold text-md'>Product Advantages</div>
                                <div className='font-normal text-sm'>Lorem Ipsum is simply dummy text of the printing.</div>
                            </div>
                        </div>
                        <div className='col-span-1 flex flex-row gap-4 items-center'>
                            <div>
                                <img src={productadvantagesSVG} alt="" />
                            </div>
                            <div className='flex flex-col'>
                                <div className='font-semibold text-md'>Product Advantages</div>
                                <div className='font-normal text-sm'>Lorem Ipsum is simply dummy text of the printing.</div>
                            </div>
                        </div>
                        <div className='col-span-1 flex flex-row gap-4 items-center'>
                            <div>
                                <img src={productadvantagesSVG} alt="" />
                            </div>
                            <div className='flex flex-col'>
                                <div className='font-semibold text-md'>Product Advantages</div>
                                <div className='font-normal text-sm'>Lorem Ipsum is simply dummy text of the printing.</div>
                            </div>
                        </div>
                        <div className='col-span-1 flex flex-row gap-4 items-center'>
                            <div>
                                <img src={productadvantagesSVG} alt="" />
                            </div>
                            <div className='flex flex-col'>
                                <div className='font-semibold text-md'>Product Advantages</div>
                                <div className='font-normal text-sm'>Lorem Ipsum is simply dummy text of the printing.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatIsAbout