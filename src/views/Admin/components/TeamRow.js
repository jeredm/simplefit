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
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
}

export default TeamRow
