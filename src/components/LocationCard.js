import React from "react";
import { Card, Icon } from 'semantic-ui-react'

export default function LocationCard(props) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>{props.type} - {props.dimension}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          {props.residents.length} residents
        </a>
      </Card.Content>
    </Card>
  )
}