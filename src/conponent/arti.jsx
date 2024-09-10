export function Arti(props){

    return(
        
        <div className="w-1/5 mx-5 mt-5 h-64 bg-slate-50 shadow-[10px_35px_60px_-15px_rgba(0,0,0,0.3)] cursor-pointer hover:scale-110 ">
           <img className='w-full h-40' src={props.atric.image} alt="" />
           <h3 className='text-right px-4 py-3'>{props.atric.title}</h3>
           <p className='text-right text-sm px-4'>خواندن {props.atric.title} دقیقه ای</p>


        </div>
        
    )
}