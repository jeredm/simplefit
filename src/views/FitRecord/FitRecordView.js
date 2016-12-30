import React, { Component } from 'react'
import WeeklyProgress from './components/WeeklyProgress'
import ExerciseGrid from './components/ExerciseGrid'
import exercises from './exercises.json'
import { Grid } from 'semantic-ui-react'

class FitRecordView extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column>
            <WeeklyProgress />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <ExerciseGrid exercises={exercises} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default FitRecordView
