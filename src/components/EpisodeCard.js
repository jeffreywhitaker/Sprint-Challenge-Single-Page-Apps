import React from "react";

export default function EpisodeCard(props) {
  return (
    <div className="character-card">
        <p>Title: {props.name}</p>
        <p>Episode: {props.episode}</p>
        <p>Date Aired: {props.air_date}</p>
    </div>
  )
}