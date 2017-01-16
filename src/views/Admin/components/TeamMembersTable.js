import React, { Component, PropTypes } from 'react'
import { Table, Menu, Icon, Button } from 'semantic-ui-react'
import TeamMemberRow from './TeamMemberRow'
import _ from 'lodash'

class TeamMembersTable extends Component {
  state = {
    loading: true,
    error: null,
    teamMembers: null,
  }

  componentDidMount = () => {
    this.getTeamMembersData()
      .then(response => {
        this.setState({
          loading: false,
          error: null,
          teamMembers: response.results.data,
        })
      })
      .catch(errors => {
        this.setState({
          loading: false,
          error: errors,
          teamMembers: null,
        })
      })
  }

  getTeamMembersData = () => {
    return (
      new Promise((resolve, reject) => {
        this.props.getTeamMembers()
          .then(results => {resolve({ results })})
          .catch(err => reject({ err }))
      })
    )
  }

  renderTeamMemberRows = () => {
    const rows = []
    const teamMembers = this.state.teamMembers
    _.each(teamMembers, teamMember => {
      rows.push(
        <TeamMemberRow teamMember={teamMember} key={teamMember.name} />
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
        <Button>New Team Member</Button>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Team Member</Table.HeaderCell>
              <Table.HeaderCell>Weekly Exercises</Table.HeaderCell>
              <Table.HeaderCell>Event Exercises</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.renderTeamMemberRows()}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='4'>
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

TeamMembersTable.propTypes = {
  getTeamMembers: PropTypes.func.isRequired,
}

export default TeamMembersTable
