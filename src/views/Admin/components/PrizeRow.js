import React, { Component, PropTypes } from 'react'
import { Table } from 'semantic-ui-react'
import _ from 'lodash'
import { Link } from 'react-router'

class PrizeRow extends Component {
  constructor(props) {
    super(props)
    const { name } = this.props.prize

    let { desc, points } this.props.prize
    if (_.isEmpty(desc)) desc = ''
    if (_.isEmpty(points)) points = 0

    this.state = {
      name,
      desc,
      points,
    }
  }

  render() {
    const { name, desc, points } = this.state
    return (
      <Table.Row>
        <Table.Cell><Link>{name}</Link></Table.Cell>
        <Table.Cell>{String(desc)}</Table.Cell>
        <Table.Cell>{String(points)} points required</Table.Cell>
      </Table.Row>
    )
  }
}

PrizeRow.propTypes = {
  prize: PropTypes.shape({
    name: PropTypes.string.isRequired,
    desc: PropTypes.string,
    points: PropTypes.number,
  }).isRequired,
}

export default PrizeRow
