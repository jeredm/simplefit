import React, { Component, PropTypes } from 'react'
import { Table, Button } from 'semantic-ui-react'

class TeamRow extends Component {
  render() {
    const { name, description } = this.props.team
    return (
      <Table.Row>
        <Table.Cell collapsing>
          <Button>Edit Team</Button>
        </Table.Cell>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{description}</Table.Cell>
      </Table.Row>
    )
  }
}

TeamRow.propTypes = {
  team: PropTypes.shape({
    description: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default TeamRow
