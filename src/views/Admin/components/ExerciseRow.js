import React, { Component, PropTypes } from 'react'
import { Table } from 'semantic-ui-react'
import _ from 'lodash'
import { Link } from 'react-router'

class ExerciseRow extends Component {
  constructor(props) {
    super(props)
    const { name } = this.props.exercise

    // Default deep props
    let { activityCnt } = this.props.exercise
    if (_.isEmpty(activityCnt)) activityCnt = 1

    this.state = {
      name,
      activityCnt,
    }
  }

  render() {
    const { name, activityCnt } = this.state
    return (
      <Table.Row>
        <Table.Cell><Link>{name}</Link></Table.Cell>
        <Table.Cell><Link>{String(activityCnt)} activities for a point</Link></Table.Cell>
      </Table.Row>
    )
  }
}

ExerciseRow.propTypes = {
  exercise: PropTypes.shape({
    name: PropTypes.string.isRequired,
    activityCnt: PropTypes.number,
  }).isRequired,
}

export default ExerciseRow
