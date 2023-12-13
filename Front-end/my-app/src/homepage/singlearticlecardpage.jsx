import React from "react";
import { useParams } from "react-router-dom";

const Singlearticlecard =() =>{

    const params = useParams();


    useEffect(()=>{

        const fetcharticle=async()=>{
          try{
            const response = await axios.get(
              `http://localhost:4002/article/${params.id}`
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





return(

<div>
<img src={`http://localhost:4002/upload/${data.image}`} className="articlsinglepage"/>
</div>
)
}


export default Singlearticlecard