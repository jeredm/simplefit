import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'

class FlashMessage extends Component {
  dismiss = () => {
    this.props.deleteFlashMessage(this.props.message.id)
  }

  getColor = (type) => {
    if (type === 'info') return 'blue'
    if (type === 'warning') return 'yellow'
    if (type === 'negative') return 'red'

    return 'yellow'
  }

  render() {
    const { message } = this.props
    return (
      <Message
        color={this.getColor(message.type)}
        content={message.text}
        onDismiss={this.dismiss}
        header={(message.header) ? message.header : ''}
      />
    )
  }
}

FlashMessage.propTypes = {
  message: React.PropTypes.object.isRequired,
  deleteFlashMessage: React.PropTypes.func.isRequired,
}

export default FlashMessage
