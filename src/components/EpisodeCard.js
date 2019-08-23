import React from "react";
import { Card, Icon } from 'semantic-ui-react'

export default function EpisodeCard(props) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>{props.episode}</Card.Meta>
        <Card.Description>
          Airdate: {props.air_date}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          {props.characters.length} characters
        </a>
      </Card.Content>
    </Card>
  )
}