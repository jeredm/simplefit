import React, { Component, PropTypes } from 'react'
import { Table } from 'semantic-ui-react'
import _ from 'lodash'
import { Link } from 'react-router'

class PrizeRow extends Component {
  constructor(props) {
    super(props)
    const { prizeName } = this.props.prize
    let { description, points } = this.props.prize
    if (_.isEmpty(description)) description = ''
    if (_.isNil(points)) points = 0

    this.state = {
      prizeName,
      description,
      points,
    }
  }

  render() {
    const { prizeName, description, points } = this.state
    return (
      <Table.Row>
        <Table.Cell><Link>{prizeName}</Link></Table.Cell>
        <Table.Cell>{String(description)}</Table.Cell>
        <Table.Cell>{String(points)} points required</Table.Cell>
      </Table.Row>
    )
  }
}

PrizeRow.propTypes = {
  prize: PropTypes.shape({
    prizeName: PropTypes.string.isRequired,
    description: PropTypes.string,
    points: PropTypes.number,
  }).isRequired,
}

export default PrizeRow
