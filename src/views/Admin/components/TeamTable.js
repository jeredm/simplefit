import React, { Component, PropTypes } from 'react'
import { Table, Menu, Icon, Button } from 'semantic-ui-react'
import TeamRow from './TeamRow'
import _ from 'lodash'
import { Link } from 'react-router'

class TeamTable extends Component {
  state = {
    loading: true,
    error: null,
    teams: null,
  }

  componentDidMount = () => {
    this.getTeamData()
      .then(response => {
        this.setState({
          loading: false,
          error: null,
          teams: response.results.data,
        })
      })
      .catch(errors => {
        this.setState({
          loading: false,
          error: errors,
          teams: null,
        })
      })
  }

  getTeamData = () => {
    return (
      new Promise((resolve, reject) => {
        this.props.getTeams()
          .then(results => {resolve({ results })})
          .catch(err => reject({ err }))
      })
    )
  }

  renderTeamRows = () => {
    const rows = []
    const teams = this.state.teams
    _.each(teams, team => {
      rows.push(
        <TeamRow team={team} key={team.name} />
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
        <Button as={Link} to='admin/team'>New Team</Button>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Team</Table.HeaderCell>
              <Table.HeaderCell>Participants</Table.HeaderCell>
              <Table.HeaderCell>Excercises</Table.HeaderCell>
              <Table.HeaderCell>Current Event Ends</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.renderTeamRows()}
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

TeamTable.propTypes = {
  getTeams: PropTypes.func.isRequired,
}

export default TeamTable
