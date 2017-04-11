import React, { Component, PropTypes } from 'react'
import { Table, Menu, Icon, Button } from 'semantic-ui-react'
import PrizeRow from './PrizeRow'
import _ from 'lodash'
import { Link } from 'react-router'

class PrizeTable extends Component {
  state = {
    loading: true,
    error: null,
    prizes: null,
  }

  componentDidMount = () => {
    this.getPrizeData()
      .then(response => {
        this.setState({
          loading: false,
          error: null,
          prizes: response.results.data,
        })
      })
      .catch(errors => {
        this.setState({
          loading: false,
          error: errors,
          prizes: null,
        })
      })
  }

  getPrizeData = () => {
    return (
      new Promise((resolve, reject) => {
        this.props.getTeams()
          .then(results => {resolve({ results })})
          .catch(err => reject({ err }))
      })
    )
  }

  renderPrizeRows = () => {
    const rows = []
    const prizes = this.state.prizes
    _.each(prizes, prize => {
      rows.push(
        <PrizeRow prize={prize} key={prize.name} />
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
        <Button as={Link} to='admin/prize'>New Prize</Button>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Prize Name</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Points</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.renderPrizeRows()}
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

PrizeTable.propTypes = {
  getPrizes: PropTypes.func.isRequired,
}

export default PrizeTable
