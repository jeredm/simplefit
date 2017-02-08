import React, { Component, PropTypes } from 'react'
import { Table } from 'semantic-ui-react'
import _ from 'lodash'
import { Link } from 'react-router'

class TeamRow extends Component {
  constructor(props) {
    super(props)
    const { teamId, teamName, eventEndDt } = this.props.team

    // Default deep props
    let { participants, exercises } = this.props.team
    if (_.isEmpty(participants)) participants = 0
    if (_.isEmpty(exercises)) exercises = 0

    this.state = {
      teamId,
      teamName,
      participants,
      exercises,
      eventEndDt,
    }
  }

  buildDateLabel = (eventEndDt) => {
    if (eventEndDt === undefined) {
      return 'no event started'
    }
    return new eventEndDt.toLocaleString('en-US').split(', ')[0]
  }

  render() {
    const { teamId, teamName, participants, exercises, eventEndDt } = this.state
    return (
      <Table.Row>
        <Table.Cell><Link>{teamId}</Link></Table.Cell>
        <Table.Cell><Link>{teamName}</Link></Table.Cell>
        <Table.Cell><Link to='admin/teammembers'>{String(participants)} people</Link></Table.Cell>
        <Table.Cell><Link to='admin/exercises'>{String(exercises)} enabled</Link></Table.Cell>
        <Table.Cell><Link>{this.buildDateLabel(eventEndDt)}</Link></Table.Cell>
      </Table.Row>
    )
  }
}

TeamRow.propTypes = {
  team: PropTypes.shape({
    teamId: PropTypes.string.isRequired,
    teamName: PropTypes.string,
    participants: PropTypes.number,
    exercises: PropTypes.number,
    eventEndDt: PropTypes.instanceOf(Date),
  }).isRequired,
}

export default TeamRow
