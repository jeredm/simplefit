import React, { Component } from 'react'
import { Table, Menu, Icon, Button } from 'semantic-ui-react'
import TeamRow from './TeamRow'
import _ from 'lodash'
import { Link } from 'react-router'

class TeamTable extends Component {
  getTeamData = () => {
    const teams = []
    teams.push({
      name: 'Fist Team',
      description: 'About the first team',
    })
    teams.push({
      name: 'Team Two',
    })
    teams.push({
      name: 'Third Team',
      description: 'About the third team',
    })

    return teams
  }

  renderTeamRows = () => {
    const teams = this.getTeamData()
    const rows = []
    _.each(teams, team => {
      rows.push(
        <TeamRow team={team} key={team.name} />
      )
    })
    return rows
  }

  render() {
    return (
      <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell collapsing>
            <Button as={Link} to='admin/team'>New Team</Button>
          </Table.HeaderCell>
          <Table.HeaderCell>Team</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {this.renderTeamRows()}
      </Table.Body>

      <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
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
    )
  }
}

export default TeamTable
