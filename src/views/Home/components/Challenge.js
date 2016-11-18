import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const Challenge = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='http://semantic-ui.com/images/avatar/large/steve.jpg' />
        <Card.Header>
          Challenge Request
        </Card.Header>
        <Card.Meta>
          Sam Hightower
        </Card.Meta>
        <Card.Description>
          Sam has challenged you to a <a>7 swim week</a>! The challenge starts on Sunday of next week.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>Accept</Button>
          <Button basic color='red'>Decline</Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default Challenge