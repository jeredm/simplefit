import React, { Component } from 'react'
import { Header, Rating } from 'semantic-ui-react'

class WeeklyProgress extends Component {
  render() {
    return (
      <div>
        <Header as='h1'>Weekly Progress</Header>
        <Rating maxRating={7} defaultRating={2} icon='star' size='massive' />
      </div>
    )
  }
}

export default WeeklyProgress
