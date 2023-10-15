import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";


export const Home = () => {
	const {store,actions} = useContext(Context)
	return(
	<div className="text-center mt-5">
		<h3>Characters</h3>
		<div>
		{
			store.characters.map((character,index)=>{
				return(
					<Card character={character} key={index}/>
					
				)
			})
		}</div>	
	</div>
	)
};
