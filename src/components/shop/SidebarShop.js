import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import SidebarShopItem from './SidebarShopItem'

const SidebarShop = (props) =>{
    return (
        <div style={{fontFamily: 'Sniglet'}} className="flex text-bee-blue flex-col">
            <div className="w-full border cursor-pointer hover:bg-blue-50 flex flex-row rounded-md border-bee-blue px-4 py-1">
                <div>
                    <FontAwesomeIcon icon={faFilter} />
                </div>
                <div className="text-center flex-grow font-bold">
                 Departments
                </div>
            </div>
            <div className='px-2 mt-4 flex flex-col space-y-2'>
               {/* Menu */}
                {
                    sidebarItem.map(item => {
                        return <SidebarShopItem category={item}/>
                    })
                }
            </div>
        </div>
    )
}

export default SidebarShop


const sidebarItem =[
    {
        menu: 'All Categories',
        desc: 'Ecommerce patterns',
        sub: [
           {
               menu: 'Electronics',
               desc: '',
               sub: [
                {
                    menu: 'Cell Phones & Smartphones'
                },
                {
                    menu: 'Cell Phone Accessories'
                },
                {
                    menu: 'Cell Phone Gatgets'
                },
                {
                    menu: 'Applications'
                },
                {
                    menu: 'Smart Watches'
                }
               ]
           },
           {
               menu: 'Business & Industrial',
               desc: '',
               sub: []
           },
           {
               menu: 'Computers',
               desc: 'Tablets & Networking',
               sub: []
           },
           {
               menu: 'Consumer Electroinics',
               desc: '',
               sub: []
           },
           {
               menu: 'Home & Garden',
               desc: '',
               sub: []
           },
           {
               menu: 'Collectibles',
               desc: '',
               sub: []
           }
        ]
    }
]