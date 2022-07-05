import React from "react";
import './index.scss';


function Card ({ handleClick, id }) {
    return (
        <div className="card" onClick={ handleClick } id={ id }>
            <h2 id={ id }>
                { id }
            </h2>
            <img id={ id } className="card-img" src={require(`../../config/villagers/${id}.webp`)} alt="alt"></img>
        </div>
    )
}

export default Card;