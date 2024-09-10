import { useContext } from "react"
import { temsi } from "../../App"

export function Input(props){
const {tem}=useContext(temsi)

return(
    <div>
    <label className={`text-right  mb-5 mt-9 block ${tem ? "text-white" :  "text-black"}`} htmlFor={props.name}>{props.labele}</label>
    <input onChange={props.change}  name={props.name} type={props.typ} id={props.name} className="border-solid border-gray-400 border-2 w-full h-12 text-right px-3 " />
    </div>
)
}