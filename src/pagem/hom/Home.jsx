import { useEffect } from "react";
import { Arti } from "../../conponent/arti";
import { Header } from "../../conponent/Header"
import { useState } from "react";

export function Home(){
  const [articals,setarticals]=useState([])

    let name="امیر بلاگ";





 

  useEffect(()=>{

    

  },[])





    return (
      <div >
        <Header name={name} />

        <div className="w-full h-96 py-0 px-12 ">
          <h2 className="mt-8 mr-10 text-2xl font-semibold text-right">مقالات جدید</h2>
          <div className="flex w-full justify-center flex-wrap my-6">
      {

        articals.map((atric)=>(
        <Arti key={atric.id} atric={atric} />
      )
      )
      }

        </div>
        </div>
       
        {/* <Foter /> */}
      </div>
    )
}