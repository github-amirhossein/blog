import { useContext } from "react"
import { temsi } from "../../App"
import { Foter } from "../../conponent/Foter"
import { Header } from "../../conponent/Header"
import iran from '../../img/iran.jpg'

export function About(){
    const {tem}=useContext(temsi)

    let name="امیر بلاگ"
    return(
        <div className={`${tem ? "bg-black" :  "bg-slate-50"}`}>
           
            <Header name={name} />
            <div className="w-full h-auto text-right px-20 mb-10">
            <h2 className={`font-bold my-5 ${tem ? "text-white" :  "text-black"}  text-2xl`}>درباره ما</h2>
            <p className={`text-right ${tem ? "text-white" :  "text-black"} `}>
            اینترنت یک فرصت است؛ هم برای مردم ایران و هم کسب و کارهای ایرانی. پس لازم بود راهی آسان، مطمئن و کم‌هزینه برای ورود کسب و کارها به دنیای اینترنت وجود داشته باشد. راهی برای آنکه در غنی شدن و افزایش کیفیت وب فارسی، نقشی داشته باشیم
             تیم ما به شما کمک خواهد کرد تا سایتی باکیفیت و کارکرد ساده برای مشتریان داشته باشید
            </p>
            <h2 className={`text-center font-black text-2xl mt-7 mb-0 ${tem ? "mb-5 text-white" :  " text-black"} `}>فعالیت ما در کدام شهر هاست؟</h2>
            <div className="flex justify-center items-center ">
                
            <img className="w-96 " src={iran} alt="iran" />
            </div>
            </div>
            <Foter />
        </div>
    )
}