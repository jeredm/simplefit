import React, { Component, PropTypes } from 'react'
import { Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getTeamExercises } from '../../../actions/teamActions'
import FlashMessageList from '../../../components/FlashMessageList'
import ExercisesTable from './ExercisesTable'

class TeamExercisesPanel extends Component {
  render() {
    return (
      <div>
        <Header as='h1'>Exercises Available</Header>
        <FlashMessageList />
        <ExercisesTable
          getTeamExercises={this.props.getTeamExercises}
        />
      </div>
    )
  }
}

TeamExercisesPanel.propTypes = {
  getTeamExercises: PropTypes.func.isRequired,
}

export default connect(null, { getTeamExercises })(TeamExercisesPanel)
