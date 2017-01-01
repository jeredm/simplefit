import React, { Component } from 'react'
import TeamListPanel from './components/TeamListPanel'
import { Button, Header } from 'semantic-ui-react'
import { Link } from 'react-router'
import FlashMessageList from '../../components/FlashMessageList'

class AdminView extends Component {
  render() {
    return (
      <div>
        <Header as='h1'>Setup</Header>
        <FlashMessageList />
        <Button as={Link} to='admin/team'>Add a New Team</Button>
        <TeamListPanel />
      </div>
    )
  }
}

export default AdminView
