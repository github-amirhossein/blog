import { Link } from "react-router-dom"
import moon from '../img/moon.png'
import sun from '../img/sun.png'
import { useContext } from "react"
import { temsi } from "../App"

export function Header(props){
    const {tem,settem}=useContext(temsi)

    

    return(
        
        <div className={` h-20  ${tem ? "bg-slate-950" :  "bg-slate-50"} py-3 mb-4 shadow-xl flex justify-start flex-row-reverse items-center`}>
            <h3 className={`mr-2 md:mr-20 ${!tem ? "text-black" :  "text-slate-50"} text-xl md:text-4xl font-black`} >{props.name}</h3>
            <ul className="flex w-2/3 flex-row-reverse justify-start list-none pr-3 md:pr-8 " >
                <li className={`ml-2 md:ml-5 ${!tem ? "text-black" :  "text-slate-50"} text-xs md:text-base cursor-pointer`}><Link to="/">لیست مقالات</Link></li>
                <li className={`ml-2 md:ml-5 ${!tem ? "text-black" :  "text-slate-50"} text-xs md:text-base cursor-pointer`}><Link to="/create-article">ساخت مقاله جدید</Link></li>
                <li className={`ml-2 md:ml-5 ${!tem ? "text-black" :  "text-slate-50"} text-xs md:text-base cursor-pointer`}><Link to="/about">درباره</Link></li>
            </ul>
            <button className="" onClick={()=>settem(!tem)}><img className="w-10" src={tem? sun : moon} alt="" /></button>
        </div>
    )
}