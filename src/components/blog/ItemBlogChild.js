const ItemBlogChild = (props) =>{

    return (
        <div style={{
            fontFamily:'Sniglet',
            backgroundImage: `url('https://cdn.wallpapersafari.com/33/59/85csLT.jpg')`
        }} className="h-auto text-white p-4 flex-col flex">
            <div className="text-sm">January 01, 2022</div>
            <div className="text-md mt-24">Title Of Article</div>
            <div className="text-sm mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
        </div>
    )
}

export default ItemBlogChild