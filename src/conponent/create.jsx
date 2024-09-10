
import { useContext, useState } from "react";
import { Foter } from "./Foter";
import { Header } from "./Header";
import { Input } from "../pagem/input/input";
import { Textarea } from "../pagem/input/textarea";
import axios from "axios";
import { temsi } from "../App";

export function Create(){
    const [art , setart]=useState({
        title :"",
        date :"",
        author:"",
        readingtime:"",
        image : "",
        massage :""

    })
    const {tem}=useContext(temsi)
    let name="امیر بلاگ"

    const onChangarti=(e)=>{
        setart((prov)=>({
            ...prov ,
            [e.target.name] : e.target.value}))
  

    }

    console.log(art)

    const handelmassage=(e)=>{
        setart((prov)=>({
            ...prov ,
            massage : e.target.value}))

    }

    const Create=()=>{
        axios.post("http://localhost:8000/articles", {
            id : 7,
            title: art.title,
            reading: art.readingtime,
            date: art.date,
            athor: art.author,
            image :art.image,
            content :art.massage



        })

    }



    return(
        <div className={`${tem ? "bg-black" :  "bg-slate-50"}`}>
             <Header name={name} />

             <div className="px-4 md:px-20 w-auto mb-10">
                <h1 className={`text-right mt-8 text-2xl font-semibold ${tem ? "text-white" :  "text-black"} `}>ساخت مقاله</h1>

              <Input labele="عنوان" name="title" typ="text" change={onChangarti} />
              <Input labele="تاریخ" name="date" typ="date" change={onChangarti} />
              <Input labele="مدت زمان خواندن" typ="text" name="readingtime" change={onChangarti} />
              <Input labele="نویسنده" name="author" typ="text" change={onChangarti} />
              <Input labele="آدرس عکس" name="image" typ="text" change={onChangarti} />
              <Textarea labele="متن" change={handelmassage} />
            


                <div className="flex justify-end mt-5 ">
                <button className="bg-indigo-600 w-32 h-9 text-white hover:scale-105  active:bg-red-600" onClick={Create}>ساخت مقاله</button>
                </div>
             </div>





             <Foter />

        </div>
    )
}