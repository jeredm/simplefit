import React, { Component } from 'react'
import TeamTable from './components/TeamTable'
import { Header } from 'semantic-ui-react'
import FlashMessageList from '../../components/FlashMessageList'

class AdminView extends Component {
  render() {
    return (
      <div>
        <Header as='h1'>Setup</Header>
        <FlashMessageList />
        <TeamTable />
      </div>
    )
  }
}

export default AdminView
