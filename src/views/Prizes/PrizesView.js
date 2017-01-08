import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import users from './prizes.json'
import PrizeGrid from './components/PrizeGrid'

class PrizesView extends Component {
  render() {
    return (
      <div>
        <Header as='h1'>Prizes</Header>
        <p>
          Click the button below to choose a prize winner! Each person gets one
          chance to win for each excercise completed. Good luck!
        </p>
        <PrizeGrid users={users} />
      </div>
    )
  }
}

export default PrizesView
