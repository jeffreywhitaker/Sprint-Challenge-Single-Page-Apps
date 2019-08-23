import React from "react";

export default function LocationCard(props) {
  return (
    <div className="character-card">
      <p>{props.name}</p>
      <p>{props.type}</p>
      <p>{props.dimension}</p>
      {/* <p>{props.residents}</p> */}
    </div>
  )
}