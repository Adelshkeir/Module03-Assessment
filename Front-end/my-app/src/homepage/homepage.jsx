import react from "react";
import "./homepage.css"
import Articlecard from "./articlecard"
import axios from "axios"
import React, { useEffect, useState } from "react";
const Homepage=()=>{


    const [article, setarticle]=useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(()=>{

        const fetcharticle=async()=>{
          try{
            const response = await axios.get(
              "http://localhost:4002/article/"
            );
        const data = response.data;
        setarticle(data)
        console.log(data)
          }
          catch(error){
            console.log(error);
            setarticle(null)
          }
        }
        fetcharticle();
        
        
        },[])


return (
<div className="mainhomepage">
<img className="homepageimage" src="https://wallpapercrafter.com/sizes/1920x1080/288772-old-newspaper-newspaper-the-1960s-retro-sepia-old.jpg" />



<div>
          <input type="text"  className="article-search" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}  style={{ color: 'white' }}/>
          </div>


<div className="homepagecardscontainer">
{article && article.filter((item) =>
      (searchTerm === "" ||
        (item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase())))
    ).map((item, index) => (
 <Articlecard  key={index} data={item}/>
))}
</div>


</div>
)
}


export default Homepage;