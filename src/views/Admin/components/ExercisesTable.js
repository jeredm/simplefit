import React, { Component, PropTypes } from 'react'
import { Table, Menu, Icon, Button } from 'semantic-ui-react'
import ExerciseRow from './ExerciseRow'
import _ from 'lodash'

class ExercisesTable extends Component {
  state = {
    loading: true,
    error: null,
    teamExercises: null,
  }

  componentDidMount = () => {
    this.getExerciseData()
      .then(response => {
        this.setState({
          loading: false,
          error: null,
          teamExercises: response.results.data,
        })
      })
      .catch(errors => {
        this.setState({
          loading: false,
          error: errors,
          teamExercises: null,
        })
      })
  }

  getExerciseData = () => {
    return (
      new Promise((resolve, reject) => {
        this.props.getTeamExercises()
          .then(results => {resolve({ results })})
          .catch(err => reject({ err }))
      })
    )
  }

  renderExerciseRows = () => {
    const rows = []
    const teamExercises = this.state.teamExercises
    _.each(teamExercises, exercise => {
      rows.push(
        <ExerciseRow exercise={exercise} key={exercise.name} />
      )
    })
    return rows
  }

  render() {
    if (this.state.loading) {
      return <span>Loading...</span>
    } else if (this.state.error !== null) {
      return <span>Error: {this.state.error.message}</span>
    }
    return (
      <div>
        <Button>New Exercise</Button>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Exercise Name</Table.HeaderCell>
              <Table.HeaderCell>Activities/Point</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.renderExerciseRows()}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='4'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='left chevron' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a'>4</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='right chevron' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    )
  }
}

ExercisesTable.propTypes = {
  getTeamExercises: PropTypes.func.isRequired,
}

export default ExercisesTable
