import React, { Component, PropTypes } from 'react'
import { Card, Icon, Label, Button } from 'semantic-ui-react'
import _ from 'lodash'

class PrizeGrid extends Component {
  constructor(props) {
    super(props)
    const cards = this.parseExercises(this.props.users)
    this.state = {
      cards,
      allCards: cards.slice(0),
      enterLeaveAnimation: 'accordianVertical',
      shuffle: 0,
      winner: '',
      remaining: this.props.users,
      maxShuffle: 20,
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
    let cards = this.state.cards
    if (shuffleCount < this.state.maxShuffle) {
      let winner = this.state.winner
      const allCards = this.state.allCards
      if (shuffleCount === 1) {
        winner = this.chooseWinner()
        if (cards.length === 1) {
          const lastWinner = cards[0]
          allCards.splice(allCards.indexOf(lastWinner), 1)
          cards = allCards.slice(0)
        }
      }
      cards = this.reduceOptions(shuffleCount, cards)
      window.setTimeout(() => {this.shuffle()}, this.throttleTimeout(shuffleCount))
      this.setState({
        cards: _.shuffle(cards),
        allCards,
        shuffle: shuffleCount,
        winner,
        shuffling: true,
      })
    } else {
      const winningCard = this.selectWinner()
      const remainingOld = this.state.remaining
      const remaining = []
      for (let i = 0; i < remainingOld.length; i++) {
        if (remainingOld[i].name !== winningCard[0].key) {
          remaining.push(remainingOld[i])
        }
      }
      this.setState({ cards: winningCard, remaining, shuffle: 0, shuffling: false })
    }
  }

  selectWinner = () => {
    for (let i = 0; i < 4; i++) {
      if (this.state.cards[i].key === this.state.winner) {
        return [this.state.cards[i]]
      }
    }
    return [this.state.cards[0]]
  }

  reduceOptions = (shuffleCount, cards) => {
    if (shuffleCount === this.state.maxShuffle - 4) {
      const reducedCards = []
      let winningCard
      cards.forEach(card => {
        if (card.key === this.state.winner) {
          winningCard = card
        }
      })
      reducedCards.push(winningCard)
      let i = 0
      while (reducedCards.length < 3 && i < cards.length) {
        if (cards[i] !== winningCard) {
          reducedCards.push(cards[i])
        }
        i ++
      }
      return reducedCards
    }
    return cards
  }

  throttleTimeout = (suffleCount) => {
    const throttle = [150, 300, 450, 600]
    const max = this.state.maxShuffle
    const portion = max / 4
    let index = 1
    while (index < 4) {
      if (index * portion > suffleCount) {
        break
      }
      index ++
    }
    return throttle[index - 1]
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
