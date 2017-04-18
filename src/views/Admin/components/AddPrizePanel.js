import React, { Component } from 'react'
import AddPrizeForm from './AddPrizeForm'
import { connect } from 'react-redux'
import { createPrize, getPrize } from '../../../actions/prizeActions'
import { addFlashMessage } from '../../../actions/flashMessages.js'

class AddPrizePanel extends Component {
  render() {
    return (
      <AddPrizeForm
        createPrize={this.props.createPrize}
        getPrize={this.props.getPrize}
        addFlashMessage={this.props.addFlashMessage}
      />
    )
  }
}

AddPrizePanel.propTypes = {
  createPrize: React.PropTypes.func.isRequired,
  getPrize: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
}

export default connect(null, { createPrize, getPrize, addFlashMessage })(AddPrizePanel)
