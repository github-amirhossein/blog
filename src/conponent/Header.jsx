export function Header(props){


    return(
        <div className=" h-20  bg-slate-50 py-3 shadow-lg flex justify-start flex-row-reverse items-center">
            <h3 className="mr-20 text-4xl font-black" >{props.name}</h3>
            <ul className="flex flex-row-reverse justify-start list-none pr-7 " >
                <li className="ml-5 cursor-pointer">لیست مقالات</li>
                <li className="ml-5 cursor-pointer">مقاله جدید</li>
                <li className="ml-5 cursor-pointer">درباره</li>
            </ul>
        </div>
    )
}