import ContainerShop from "../../components/shop/ContainerShop";
import SidebarShop from "../../components/shop/SidebarShop";

const ContentShop = (props) =>{
    return (
        <div>
            <div className="p-8 md:p-16 gap-16 flex flex-row">
            <div className="w-64 md:block hidden">
                <SidebarShop/>
            </div>
            <div className="flex-grow">
                <ContainerShop/>
            </div>
        </div>
        </div>
    )
}

export default ContentShop;