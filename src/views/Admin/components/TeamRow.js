import React, { Component, PropTypes } from 'react'
import { Table } from 'semantic-ui-react'
import _ from 'lodash'
import { Link } from 'react-router'

class TeamRow extends Component {
  constructor(props) {
    super(props)
    const { name, eventEndDt } = this.props.team

    // Default deep props
    let { participants, excercises } = this.props.team
    if (_.isEmpty(participants)) participants = 0
    if (_.isEmpty(excercises)) excercises = 0

    this.state = {
      name,
      participants,
      excercises,
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
    const { name, participants, excercises, eventEndDt } = this.state
    return (
      <Table.Row>
        <Table.Cell><Link>{name}</Link></Table.Cell>
        <Table.Cell><Link>{String(participants)} people</Link></Table.Cell>
        <Table.Cell><Link>{String(excercises)} enabled</Link></Table.Cell>
        <Table.Cell><Link>{this.buildDateLabel(eventEndDt)}</Link></Table.Cell>
      </Table.Row>
    )
  }
}

TeamRow.propTypes = {
  team: PropTypes.shape({
    name: PropTypes.string.isRequired,
    participants: PropTypes.number,
    excercises: PropTypes.number,
    eventEndDt: PropTypes.instanceOf(Date),
  }).isRequired,
}

export default TeamRow
