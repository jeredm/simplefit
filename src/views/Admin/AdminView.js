import React, { Component, PropTypes } from 'react'
import TeamTable from './components/TeamTable'
import { Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getTeams } from '../../actions/teamActions'
import FlashMessageList from '../../components/FlashMessageList'

class AdminView extends Component {
  render() {
    return (
      <div>
        <Header as='h1'>Setup</Header>
        <FlashMessageList />
        <TeamTable
          getTeams={this.props.getTeams}
        />
      </div>
    )
  }
}

AdminView.propTypes = {
  getTeams: PropTypes.func.isRequired,
}

export default connect(null, { getTeams })(AdminView)
