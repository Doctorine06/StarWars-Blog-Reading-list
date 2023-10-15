import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import {Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PeopleCards = ({character, index}) => {
    const { store, actions } = useContext(Context);
    const params = useParams();
let char = store.people.find((item,index) => index == params.theIndex)

return(
    <div className="card">
        <img 
        className="card-img-top"
        src={"#" +{index} + ".jpg?raw=true"}
        alt"what is .jpg?raw=true?"
        ></img>
        <div className="card-body">
            <h5 className="card-title">{char.name}</h5>
            <p className="card-text">{char.gender}</p>
            <p className="card-text"{char.height}</p>
        </div>
    </div>
);
};
PeopleCards.propTypes = { 
    match: PropTypes.object,
};
