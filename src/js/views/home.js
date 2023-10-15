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
	<div className="text-center mt-5">
		<h3>Characters</h3>
		<div>
		{
			store.people.map((character,index)=>{
				return(
					<PeopleCard character={character} key={index}/>
					
				)
			})
		}</div>	
	</div>
	)
};
