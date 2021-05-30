export   const getGifs = async(category)  => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=gaj3d66lHQpxk0Nd7bDOiCeDTDMtR5SF&q=${encodeURI(category)}&limit=10&lang=es`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img=>{
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gifs;
}