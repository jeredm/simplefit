import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import users from './prizes.json'
import PrizeGrid from './components/PrizeGrid'

class PrizesView extends Component {
  render() {
    return (
      <div>
        <Header as='h1'>Prizes</Header>
        <p>TODO: Experiment with a raffle system. This may go into the Admin area later</p>
        <PrizeGrid users={users} />
      </div>
    )
  }
}

export default PrizesView
