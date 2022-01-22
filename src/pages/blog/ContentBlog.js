import SidebarBlog from "../../components/blog/SidebarBlog";
import ContainerBlog from "../../components/blog/ContainerBlog";

const ContentBlog = (props) =>{
    return (
        <div className="p-8 md:p-16 gap-16 flex flex-row">
            <div className="w-64 md:block hidden">
                <SidebarBlog/>
            </div>
            <div className="flex-grow">
                <ContainerBlog/>
            </div>
        </div>
    )
}

export default ContentBlog;