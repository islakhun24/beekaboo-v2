import ItemBlogParent from "./ItemBlogParent";
import ItemBlogChild from "./ItemBlogChild";
const ContainerBlog = (props) =>{
    return (
       <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
                <ItemBlogParent/>
            </div>
            <div className="col-span-1 gap-4 grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2">
                <ItemBlogChild/>
                <ItemBlogChild/>
                <ItemBlogChild/>
                <ItemBlogChild/>
            </div>
        </div>
        <div className="grid mt-4 grid-cols-1 md:grid-cols-2 gap-4">
           
            <div className="col-span-1 gap-4 grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2">
                <ItemBlogChild/>
                <ItemBlogChild/>
                <ItemBlogChild/>
                <ItemBlogChild/>
            </div>
            <div className="col-span-1">
                <ItemBlogParent/>
            </div>
        </div>
       </div>
    )
}

export default ContainerBlog;