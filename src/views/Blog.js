import ContentBlog from "../pages/blog/ContentBlog";
import HomeBlog from "../pages/blog/HomeBlog";

const BlogViews = (props) =>{
    return (
        <div className="h-auto bg-white w-screen">
            <HomeBlog/>
            <ContentBlog/>
        </div>
    )
}

export default BlogViews;