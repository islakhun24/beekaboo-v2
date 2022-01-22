import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const SidebarBlog = (props) =>{
    return (
        <div style={{fontFamily: 'Sniglet'}} className="flex text-bee-blue flex-col">
            <div className="w-full border cursor-pointer hover:bg-blue-50 flex flex-row rounded-md border-bee-blue px-4 py-1">
                <div>
                    <FontAwesomeIcon icon={faFilter} />
                </div>
                <div className="text-center flex-grow font-bold">
                    Category
                </div>
            </div>
            <div className='px-2 mt-4 space-y-2'>
                <div className='flex flex-row py-2 rounded-md cursor-pointer px-2 hover:bg-blue-100 space-x-2 w-full items-center'>
                    <div>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                    <div className='text-base text-bee-black'>Catagory 1</div>
                </div>
                <div className='flex flex-row py-2 rounded-md cursor-pointer px-2 hover:bg-blue-100 space-x-2 w-full items-center'>
                    <div>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                    <div className='text-base text-bee-black'>Catagory 2</div>
                </div>
                <div className='flex flex-row py-2 rounded-md cursor-pointer px-2 hover:bg-blue-100 space-x-2 w-full items-center'>
                    <div>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                    <div className='text-base text-bee-black'>Catagory 3</div>
                </div>
                <div className='flex flex-row py-2 rounded-md cursor-pointer px-2 hover:bg-blue-100 space-x-2 w-full items-center'>
                    <div>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                    <div className='text-base text-bee-black'>Catagory 4</div>
                </div>
            </div>
        </div>
    )
}

export default SidebarBlog