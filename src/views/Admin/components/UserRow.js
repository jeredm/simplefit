import React, { Component, PropTypes } from 'react'
import { Table } from 'semantic-ui-react'
import _ from 'lodash'

class UserRow extends Component {
  constructor(props) {
    super(props)
    const { username, email, fullname } = this.props.user

    this.state = {
      username,
      email,
      fullname,
    }
  }

  render() {
    const { username, email, fullname } = this.state
    return (
      <Table.Row>
        <Table.Cell>{fullname}</Table.Cell>
        <Table.Cell>{email}</Table.Cell>
        <Table.Cell>{username}</Table.Cell>
      </Table.Row>
    )
  }
}

UserRow.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
  }).isRequired,
}

export default UserRow
