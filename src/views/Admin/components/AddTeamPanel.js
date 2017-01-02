import React, { Component } from 'react'
import AddTeamForm from './AddTeamForm'
import { connect } from 'react-redux'
import { createTeam, getTeam } from '../../../actions/teamActions'
import { addFlashMessage } from '../../../actions/flashMessages.js'

class AddTeamPanel extends Component {
  render() {
    return (
      <AddTeamForm
        createTeam={this.props.createTeam}
        getTeam={this.props.getTeam}
        addFlashMessage={this.props.addFlashMessage}
      />
    )
  }
}

AddTeamPanel.propTypes = {
  createTeam: React.PropTypes.func.isRequired,
  getTeam: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
}

export default connect(null, { createTeam, getTeam, addFlashMessage })(AddTeamPanel)
