import { useParams } from "react-router-dom";
import { Foter } from "../../conponent/Foter";
import { Header } from "../../conponent/Header";
import im1 from "../../img/jsv.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Load } from "../../conponent/isloading";

export function Maghaleh(){
    let name="امیر بلاگ";
    const [art , setart]=useState([])
    const params= useParams();
    const [isloading,setisloading]=useState(false)


    useEffect(()=>{
    
        setisloading(true)
        axios.get(`http://localhost:8000/articles/${params.id}`).then(rez=>{
            setart(rez.data);
            console.log(rez.data);
            setisloading(false)
          })
          .catch(error=>{console.log(error)}
          )
      
      
        },[])
      

    return(
        <>


           <Header name={name} />
           { isloading? <Load /> :<div> <div className="w-full h-auto px-3 md:px-20 mb-10">
                <h1 className="text-right font-extrabold text-4xl mt-10 mb-2">{art.title}</h1>
                <div className=" flex justify-start flex-row-reverse text-xs md:text-sm mb-7">
                    <span className="ml-3">تاریخ : {art.date}</span>
                    <span className="ml-3">نویسنده : {art.athor}</span>
                    <span >مدت زمان خواندن : {art.reading}</span>
                </div>
                <div className="flex justify-center mb-9">
                <img className="w-80 md:w-1/2 " src={art.image} alt="" />
                </div>

                <p className="text-right">
                    {art.content}
                         </p>

            </div>

           <Foter />
           </div>}
        </>
    )
}