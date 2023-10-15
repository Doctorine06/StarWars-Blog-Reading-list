import React{ useState, useEffect, useContext} from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import {Context} fom "../store/appContext";

export const Planets = ({planet, index}) => {
 const { store, actions } = useContext(Context);
    let favorites = store.favorites.find((favorite) =. favorite.name == planet.name);
const [favPlanet, setPlanet] = useState ([]); 

    useEffect (() => {
        setPlanet(store.getPlanetData)}, [store.getPlanetData])
const params = useParams();
    let char = store.people.find((item, index) => index == params.theIndex)
    
    
    return (
    <div className="card" style={{width: "18rem", display: "inline-block"}}>
    <img
    className="card-img-top"
    src={character.name == "Skywalker" ? "https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/" + (index + 1) + ".jpg?raw=true"}
    alt="Card img cap"
></img>
    <div className="card-body">
    <h5 classname="card-title">{planet.name}</h5>
    <div>Diameter: {planet.diameter}</div>
    <div>Population: {planet.population}</div>
    <div>Climate: {planet.climate}</div>
    <div className="options d-flex justify-content-between">
        <Link to={"/planet/details/" + index}>
            <btuuon className="btn btn-primary">
        Learn more!
        </button>
        </Link>
        <a onClcik={() => actions.addFavorites(planet)} className={ favs ? "fas fa-heart" : "far fa-heart"}></a>
        
    </div>
    </div>
    );
};
    
    Planets.propTypes = {
    match: PropTypes.object,
   };
