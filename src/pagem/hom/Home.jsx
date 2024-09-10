import { useContext, useEffect } from "react";
import { Arti } from "../../conponent/arti";
import { Header } from "../../conponent/Header"
import { useState } from "react";
import axios from "axios";
import { Foter } from "../../conponent/Foter";
import { Link } from "react-router-dom";
import { Load } from "../../conponent/isloading";
import { temsi } from "../../App";

export function Home(){
  const [articals,setarticals]=useState([])
  const {tem}=useContext(temsi)

  let name="امیر بلاگ";

  const [isloading,setisloading]=useState(false)




 

  useEffect(()=>{
    
    setisloading((true))
  axios.get("http://localhost:8000/articles").then(rez=>{
      setarticals(rez.data);
      console.log(rez.data);
      setisloading(false)
    })
    .catch(error=>{console.log(error)}
    )


  },[])





    return (
      <div className={`${tem ? "bg-black" :  "bg-slate-50"}`} >
        <Header name={name} />

        <div className={`w-full  h-auto py-10 px-12  `}>
          <h2 className={` mr-10 ${tem ? "text-white" :  "text-black"} text-2xl font-semibold text-right`}>مقالات جدید</h2>
      {isloading? <Load /> :   <div className="flex w-full justify-center flex-wrap my-6">
      {

        articals.map((atric)=>(
          <Link  to={`/article/${atric.id}`} className=" w-80 md:w-1/5 mx-5 mt-5 h-72" >
        <Arti key={atric.id} atric={atric} />
          </Link>
      )
      )
      }
        </div>
        }

      

        
        </div>
       
          <Foter />
      </div>
    )
}