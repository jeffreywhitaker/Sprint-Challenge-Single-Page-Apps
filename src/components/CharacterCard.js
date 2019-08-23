import React from "react";

export default function CharacterCard(props) {
  return (
    <div className="character-card">
      <img src={props.image}/>
      <span>{props.species} {props.status}</span>
      <p>Name: {props.name}</p>
      <p>Location: {props.location.name}</p>
    </div>
  )
}
