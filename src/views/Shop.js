import ContentShop from "../pages/shop/ContentShop";
import HomeShop from "../pages/shop/HomeShop";

const ShopViews = (props) =>{
    return (
        <div className="h-auto bg-white w-screen">
            <HomeShop/>
            <ContentShop/>
        </div>
    )
}

export default ShopViews;