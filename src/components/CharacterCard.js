import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterCard(props) {
  return (
    <Card>
      <Image src={props.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>{props.species} {props.status}</Card.Meta>
        <Card.Description>
          Location: {props.location.name}<br/>
          Origin: {props.origin.name}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          Episodes
        </a>
      </Card.Content>
    </Card>
  )
}
