import React from 'react'
import { Button, Form, Header } from 'semantic-ui-react'
import _ from 'lodash'
import { Message } from 'semantic-ui-react'

class AddTeamForm extends React.Component {
  state = { errors: {} }

  validateInput(data) {
    const errors = {}

    if (_.isEmpty(data.teamName)) {
      errors.teamName = 'Team Name is a required field'
    }

    return {
      errors,
      isValid: _.isEmpty(errors),
    }
  }

  renderErrorMessages = () => {
    const messages = _.map(this.state.errors, (message) => {
      return message
    })
    if (!_.isEmpty(messages)) {
      return (
        <div>
          <Message
            header={'Error Saving'}
            list={messages}
            error
          />
        </div>
      )
    }
  }

  isValid = (formData) => {
    const { errors, isValid } = this.validateInput(formData)

    if (!isValid) {
      this.setState({ errors })
    }
    return isValid
  }

  handleSubmit = (e, formData) => {
    e.preventDefault()
    if (this.isValid(formData)) {
      this.setState(formData)
      this.props.createTeam(formData).then(
        () => {
          this.props.addFlashMessage({
            type: 'info',
            header: 'Team Created',
            text: 'You new team has been added!',
          })
          this.context.router.push('/admin')
        },
        ({ data }) => this.setState({ errors: data })
      )
    }
  }

  navigateBack = (e) => {
    e.preventDefault()
    this.context.router.push('/admin')
  }

  render() {
    const { errors } = this.state

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Header as='h1'>Create a Team</Header>
          <Form.Input
            label='Team Name'
            placeholder='A unique team name'
            name='teamName'
            {...errors.teamName ? { error: true } : {}}
          />
          <Form.TextArea
            label='Team Rules'
            placeholder='How long is each workout? How many workouts per week?'
            name='teamDesc'
            {...errors.teamDesc ? { error: true } : {}}
          />
          <Form.Group>
            <Button primary type='submit'>Submit</Button>
            <Button onClick={this.navigateBack}>Cancel</Button>
          </Form.Group>
        </Form>
        {this.renderErrorMessages()}
      </div>
    )
  }
}

AddTeamForm.propTypes = {
  createTeam: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func,
}

AddTeamForm.contextTypes = {
  router: React.PropTypes.object.isRequired,
}

export default AddTeamForm
