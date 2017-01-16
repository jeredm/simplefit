import React, { Component, PropTypes } from 'react'
import { Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getTeamMembers } from '../../../actions/teamActions'
import FlashMessageList from '../../../components/FlashMessageList'
import TeamMembersTable from './TeamMembersTable'

class TeamMembersPanel extends Component {
  render() {
    return (
      <div>
        <Header as='h1'>Team Members</Header>
        <FlashMessageList />
        <TeamMembersTable
          getTeamMembers={this.props.getTeamMembers}
        />
      </div>
    )
  }
}

TeamMembersPanel.propTypes = {
  getTeamMembers: PropTypes.func.isRequired,
}

export default connect(null, { getTeamMembers })(TeamMembersPanel)
