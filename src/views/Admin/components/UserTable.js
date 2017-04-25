import React, { Component, PropTypes } from 'react'
import { Table, Menu, Icon, Button } from 'semantic-ui-react'
import UserRow from './UserRow'
import _ from 'lodash'
import { Link } from 'react-router'

class UserTable extends Component {
  state = {
    loading: true,
    error: null,
    users: null,
  }

  componentDidMount = () => {
    this.getUserData()
      .then(response => {
        this.setState({
          loading: false,
          error: null,
          users: response.results.data,
        })
      })
      .catch(errors => {
        this.setState({
          loading: false,
          error: errors,
          users: null,
        })
      })
  }

  getUserData = () => {
    return (
      new Promise((resolve, reject) => {
        this.props.getUsers()
          .then(results => {resolve({ results })})
          .catch(err => reject({ err }))
      })
    )
  }

  renderUserRows = () => {
    const rows = []
    const users = this.state.users
    _.each(users, user => {
      rows.push(
        <UserRow user={user} key={user.username} />
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
        <Button as={Link} to='admin/user'>New User</Button>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Username</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.renderUserRows()}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='5'>
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

UserTable.propTypes = {
  getUsers: PropTypes.func.isRequired,
}

export default UserTable
