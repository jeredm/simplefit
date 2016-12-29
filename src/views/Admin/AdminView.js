import React, { Component } from 'react'
import TeamListPanel from './components/TeamListPanel'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router'

class AdminView extends Component {
  render() {
    return (
      <div>
        <TeamListPanel />
        <Button as={Link} to='admin/team'>Add Team</Button>
      </div>
    )
  }
}

export default AdminView
