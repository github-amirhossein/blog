import { Header } from "../../conponent/Header";
import er404 from '../../img/404.png';
import rok from '../../img/rocket.svg';
import eart from '../../img/earth.svg';
import moon from '../../img/moon.svg';
import as from '../../img/astronaut.svg';


 
export function Erore(){

    return(
        <>
            <Header name="امیر بلاگ"  />
            <div className="bg-purple w-full" >
            <div className="stars flex items-center">
            <div class="central-body ">
			<img className="w-80" src={er404} alt="" />
            </div>
		<div class="objects">
			<img className="object_rocket" src={rok} alt=" " />
			<div className="earth-moon">
				<img className="object_earth" src={eart} alt="" />
				<img className="object_moon" src={moon} alt="" />
			</div>
			<div className="box_astronaut">
				<img class="w-20 object_astronaut" src={as} alt=""  />
			</div>
		</div>
		<div className="glowing_stars">
			<div className="star"></div>
			<div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
			<div className="star"></div>
            </div>
		</div></div>
        </>
       
    )
}