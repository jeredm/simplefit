import React, { Component } from 'react'
import TeamListPanel from './components/TeamListPanel'
import AddTeamPanel from './components/AddTeamPanel'
import { Button } from 'semantic-ui-react'

class AdminView extends Component {
  state = {
    activePanel: 'list',
  }

  handleItemClick = (e) => {
    this.setState({ activePanel: 'add' })
  }

  renderPanel = () => {
    const { activePanel } = this.state

    if (activePanel === 'list') return <TeamListPanel />
    if (activePanel === 'add') return <AddTeamPanel />

    return <div>Unknown activePanel: {activePanel}</div>
  }

  render() {
    const { activePanel } = this.state

    const addTeamLink = (
      <div>
        <Button onClick={this.handleItemClick}>Add Team</Button>
      </div>
    )

    return (
      <div>
        { activePanel === 'list' ? addTeamLink : ''}
        <div>
          {this.renderPanel()}
        </div>
      </div>
    )
  }
}

export default AdminView
