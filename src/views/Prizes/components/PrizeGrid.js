import React, { Component, PropTypes } from 'react'
import { Card, Icon, Label, Button } from 'semantic-ui-react'
import _ from 'lodash'

class PrizeGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: this.parseExercises(this.props.users),
      enterLeaveAnimation: 'accordianVertical',
      shuffle: 0,
    }
  }

  parseExercises = (users) => {
    const userCards = []

    _.each(users, user => {
      userCards.push({
        key: user.name,
        header: user.name,
        image: {
          src: user.image,
        },
        extra: this.buildIcon(user.exercises),
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

  shuffle = () => {
    const shuffleCount = this.state.shuffle + 1
    if (shuffleCount < 20) {
      window.setTimeout(() => { this.shuffle() }, 600)
      this.setState({ cards: _.shuffle(this.state.cards), shuffle: shuffleCount })
    } else {
      this.setState({ shuffle: 0 })
    }
  }

  render() {
    return (
      <div>
        <div>
          <Button positive size='massive' onClick={this.shuffle} >Choose a Winner</Button>
        </div>
        <div>
          &nbsp;
        </div>
        <div>
          <Card.Group stackable>
            {this.state.cards.map(card =>
                <Card {...card} />
            )}
          </Card.Group>
        </div>
      </div>
    )
  }
}

PrizeGrid.propTypes = {
  users: PropTypes.array,
}

export default PrizeGrid
