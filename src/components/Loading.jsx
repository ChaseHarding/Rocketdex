import React from "react";
import Pokeball from '../assets/images/pokeball.png'

export const Loading = (props) => {
    return (
        <>
            <img className="pokeball-loading" src={Pokeball} alt="Pokeball"/>
            <div className="loading-text-div">
                <h1 className="loading-text">Loading...</h1>
            </div>
        </>
    )
}