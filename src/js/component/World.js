import React{ useState, useEffect, useContext} from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import {Context} fom "../store/appContext";

export const planets = ({planet, index}) => {
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
    <h5 classname="card-title">{char.name}</h5>
    <p className="card-text">{char.gender}</p>
    <p className="card-text">{char.height}</p>
    <p className+"card-text">{char.saga}</p>
    <div className="options d-flex justify-content-between">
        <Link to={"/character/details/" + index}>
            <btuuon className="btn btn-primary">
        Learn how!
        </button>
        </Link>
        <a onClcik={() => actions.addFavorites(character)} className={ favs ? "fas fa-heart" : "far fa-heart"}></a>
        
    </div>
    </div>
    );
};
    
    PeopleCard.propTypes = {
    match: PropTypes.object,
   };
