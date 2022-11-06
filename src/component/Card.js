import React from "react";
 

function Card (props){
    return(
        <div className="bg-light-blue dib br3 pa3 ma2 grow tc pw2 shadow-5" >
        <img alt='robots' src={`https://robohash.org/${props.name}?200x200`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card 