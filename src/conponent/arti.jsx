import { useContext } from "react"
import { temsi } from "../App"

export function Arti(props){
    const {tem}=useContext(temsi)

    return(
        
        <div className={`h-full ${tem ? "bg-slate-950 shadow-[0px_0px_30px_0px_rgba(25,240,255,0.04)]" : "bg-white shadow-[10px_35px_60px_-15px_rgba(0,0,0,0.3)]"}  cursor-pointer hover:scale-110 `}>
           <img className={`w-full h-40 `} src={props.atric.image} alt="بارگذاری عکس" />
           <h3 className={`text-right px-4 py-3 ${tem ? "text-white" : "text-black" }`}>{props.atric.title}</h3>
           <p className={`text-right text-sm px-4 ${tem ? "text-white" : "text-black" }`}>خواندن {props.atric.reading} دقیقه ای</p>
        </div>
        
    )
}