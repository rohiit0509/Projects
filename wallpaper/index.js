let imageContainer = document.getElementById("images")
var count=1
window.onscroll=async (e)=>{
   
    if(window.scrollY + window.innerHeight>=document.documentElement.scrollHeight)
    {
        count++
        let url=`https://api.unsplash.com/photos/?client_id=4JBqGzRA8ZWpI2blmkQG1llkVELj9_d0pVe9gSRLXx0&page=${count}`;
        await images(url)
    }   
}
const images=async(url)=>{
let data= await fetch(url)
let jsonData = await data.json()
jsonData.map((item)=>{
    
    let div=document.createElement('div')
    div.setAttribute('class','card')
    let image = document.createElement("img")
    image.src=item.urls.regular
    image.width=300
    image.height=450
    image.style='object-fit:cover'
    div.appendChild(image)
    imageContainer.appendChild(div)
})
}


if(count==1){
    let url=`https://api.unsplash.com/photos/?client_id=4JBqGzRA8ZWpI2blmkQG1llkVELj9_d0pVe9gSRLXx0&page=${count}`;
    images(url)
}
// images();