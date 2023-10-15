import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PeopleCard = ({character, index}) => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    let char = store.people.find((item, index) => index == params.theIndex)


  return (
    <div className="card" style={{ width: "18rem", display: "inline-block"}}>
      <img
        className="card-img-top"
        src={"https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/" + {index} + ".jpg?raw=true"}
        alt="Card Img Limit (cap)"
      ></img>
      <div className="card-body">
        <h5 classname="card-title">{char.name}</h5>
        <div>Gender: {char.gender}</div>
        <div>Height: {char.height} cm</div>
        <div>Birth Year: {char.birth_year}</div>
        <div className="options d-flex justify-content-between">
          <Link to={"/character/details/" + index}>
          <button className="btn btn-primary">
                Learn more!
          </button>
          </Link>
          <a onClick {() => actions.addFavorites(char)} className={favs ? "fas fa-heart" : "far fa-heart}</a>
          </div>
      </div>
    </div>
  );
};

PeopleCard.propTypes = {
    match: PropTypes.object,
  };
