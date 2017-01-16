import React, { Component, PropTypes } from 'react'
import { Table } from 'semantic-ui-react'
import _ from 'lodash'
import { Link } from 'react-router'

class TeamMemberRow extends Component {
  constructor(props) {
    super(props)
    const { name } = this.props.teamMembers

    // Default deep props
    let { weekly, eventWide } = this.props.teamMembers
    if (_.isEmpty(weekly)) weekly = 0
    if (_.isEmpty(eventWide)) eventWide = 0

    this.state = {
      name,
      weekly,
      eventWide,
    }
  }

  render() {
    const { name, weekly, eventWide } = this.state
    return (
      <Table.Row>
        <Table.Cell><Link>{name}</Link></Table.Cell>
        <Table.Cell><Link>{String(weekly)} exercises</Link></Table.Cell>
        <Table.Cell><Link>{String(eventWide)} exercises</Link></Table.Cell>
      </Table.Row>
    )
  }
}

TeamMemberRow.propTypes = {
  teamMembers: PropTypes.shape({
    name: PropTypes.string.isRequired,
    weekly: PropTypes.number,
    eventWide: PropTypes.number,
  }).isRequired,
}

export default TeamMemberRow
