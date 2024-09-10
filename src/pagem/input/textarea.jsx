import { useContext } from "react"
import { temsi } from "../../App"

export function Textarea(props){
    const {tem}=useContext(temsi)

    return(
        <div>
        <label className={`${tem ? "text-white" :  "text-black"} text-right  mb-5 mt-9 block`} htmlFor="">{props.labele}</label>
        <textarea className="text-right bg-slate-100 border-2 border-slate-400 w-full min-h-48 pt-1 px-2" onChange={props.change} name="" id=""></textarea>
        </div>
    )
}