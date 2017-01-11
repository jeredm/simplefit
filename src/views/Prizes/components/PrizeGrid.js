import React, { Component, PropTypes } from 'react'
import { Card, Icon, Label, Button } from 'semantic-ui-react'
import _ from 'lodash'

class PrizeGrid extends Component {
  constructor(props) {
    super(props)
    const cards = this.parseExercises(this.props.users)
    this.state = {
      cards,
      enterLeaveAnimation: 'accordianVertical',
      shuffle: 0,
      winner: '',
      remaining: this.props.users,
      maxShuffle: 30,
      shuffling: false,
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

  chooseWinner = () => {
    let winners = []
    const remaining = this.state.remaining

    _.each(remaining, user => {
      for (let i = 0; i < user.exercises; i++) {
        winners.push(user.name)
      }
    })

    for (let i = 0; i < 50; i ++) {
      winners = _.shuffle(winners)
    }

    return winners[0]
  }

  buildIcon = (excercises) => {
    return (
      <Label size='large'>
        <Icon name='heartbeat' />{excercises} Exercises Completed
      </Label>
    )
  }

  shuffle = () => {
    const shuffleCount = this.state.shuffle + 1
    if (shuffleCount < this.state.maxShuffle) {
      let winner = this.state.winner
      if (shuffleCount === 1) {
        winner = this.chooseWinner()
      }
      window.setTimeout(() => { this.shuffle() }, this.throttleTimeout(shuffleCount))
      this.setState({
        cards: _.shuffle(this.state.cards),
        shuffle: shuffleCount,
        winner,
        shuffling: true,
      })
    } else {
      this.setState({ shuffle: 0, shuffling: false })
    }
  }

  throttleTimeout = (suffleCount) => {
    const throttle = [150, 300, 450, 700]
    const max = this.state.maxShuffle
    const portion = max / 4
    let index = 1
    while (index < 4) {
      if (index * portion > suffleCount) {
        break
      }
      index ++
    }
    return throttle[index]
  }

  buildWinnerLabel = () => {
    const { shuffle, winner } = this.state
    if (shuffle === 0 && winner !== '') {
      return <h1>Winner: {this.state.winner}</h1>
    }
  }

  render() {
    return (
      <div>
        <div>
          <Button
            positive
            size='massive'
            onClick={this.shuffle}
            disabled={this.state.shuffling}
          >
            Choose a Winner
          </Button>
          {this.buildWinnerLabel()}
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
