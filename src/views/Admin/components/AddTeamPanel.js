import React, { Component } from 'react'
import AddTeamForm from './AddTeamForm'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createTeam } from '../../../actions/teamActions'
import { addFlashMessage } from '../../../actions/flashMessages.js'

class AddTeamPanel extends Component {
  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <AddTeamForm
            createTeam={this.props.createTeam}
            addFlashMessage={this.props.addFlashMessage}
          />
        </Grid.Column>
      </Grid>
    )
  }
}

AddTeamPanel.propTypes = {
  createTeam: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
}

export default connect(null, { createTeam, addFlashMessage })(AddTeamPanel)
