import React, { Component, PropTypes } from 'react'
import { Card, Icon, Label } from 'semantic-ui-react'
import _ from 'lodash'

class PrizeGrid extends Component {
  static propTypes = {
    users: PropTypes.array,
  }

  parseExercises = (users) => {
    const userCards = []

    _.each(users, user => {
      userCards.push({
        key: user.name,
        header: user.name,
        image: user.image,
        extra: this.buildIcon(user.exercises),
          // description: 'This is where the desc is',
          // extra: 'extra'
      })
    })

    return userCards
  }

  buildIcon = (excercises) => {
    return (
      <Label size='large'>
        <Icon name='heartbeat' />{excercises} Excercises Completed
      </Label>
    )
  }

  render() {
    const cards = this.parseExercises(this.props.users)

    return (
      <div>
        <Card.Group items={cards} stackable />
      </div>
    )
  }
}

export default PrizeGrid
