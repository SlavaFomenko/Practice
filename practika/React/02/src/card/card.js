import React from "react";

function Card(props) {
  const {title , price , img} = props;
  return(
    <div className="card">
      <h1>{title}</h1>
      <p>{price}</p>
      <img src={img}/>
    </div>
  )
}

export default Card;