import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
<<<<<<< HEAD
import { PeopleCard } from "../component/Pepole";
import { PeopleCards } from "../component/peoplecard";

=======
>>>>>>> refs/remotes/origin/master


export const Home = () => {
	const {store,actions} = useContext(Context)
	return(
	<div>
	<section>
		<h2>Characters</h2>
		<div>
		{store.people.map((character,index)=>{
				return <PeopleCards character={character} key={index}/>;
			})}
		</div>
		</section>
	<section>
		<h2>Planets</h2>
		<div>
			{store.planets.map(world, index) => { 
			return <Planets key={index} index={index} planets={world} />;
			})}
			</div>
		</section>
		
		<section>
			<h2>Vehicles</h2>
			<div>
				{store.vehicles.map((ship, index) => {
					return <Vehicles key={index} index={index} vehicles={ship} />;
					})}
	</div>
	</section>
	</div>
	)
};
