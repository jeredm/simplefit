import React from 'react'
import { Button, Form, Header } from 'semantic-ui-react'
import _ from 'lodash'
import { Message } from 'semantic-ui-react'

class AddTeamForm extends React.Component {
  state = { errors: {} }

  renderErrorMessages = () => {
    const messages = _.values(this.state.errors)
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

  handleSubmit = (e, formData) => {
    e.preventDefault()
    this.isValid(formData)
      .then(() => {
        this.setState(formData)
        this.props.createTeam(formData)
      })
      .then(() => {
        this.props.addFlashMessage({
          type: 'info',
          header: 'Team Created',
          text: 'You new team has been added!',
        })
        this.context.router.push('/admin')
      })
      .catch(err => { this.setState({ errors: err }) })
  }

  isValid = (formData) => {
    return (
      new Promise((resolve, reject) => {
        this.validateInput(formData)
          .then(() => { return this.checkIdExists(formData) })
          .then(() => { return resolve(true) })
          .catch(err => { return reject(err) })
      })
    )
  }

  validateInput = (data) => {
    const errors = {}
    return (
      new Promise((resolve, reject) => {
        if (_.isEmpty(data.teamId)) {
          errors.teamId = 'Team Id is a required field'
          reject(errors)
        }
        if (_.isEmpty(data.teamName)) {
          errors.teamName = 'Team Name is a required field'
          reject(errors)
        }
        return resolve(true)
      })
    )
  }

  checkIdExists = (formData) => {
    const errors = {}
    return (
      new Promise((resolve, reject) => {
        this.props.getTeam(formData.teamId)
          .then(res => {
            if (!_.isEmpty(res.data.team)) {
              errors.teamId = 'The team id is already in use'
              return reject(errors)
            }
            return resolve(false)
          })
          .catch(err => {
            errors.teamId = err.message
            return reject(errors)
          })
      })
    )
  }

  navigateBack = (e) => {
    e.preventDefault()
    this.setState({ errors: {} })
    this.context.router.push('/admin')
  }

  render() {
    const { errors } = this.state
    const prizes = [
      { text: 'Quarterly', value: 'quarterly' },
      { text: 'Monthly', value: 'monthly' },
      { text: 'Weekly', value: 'weekly' },
      { text: 'Annually', value: 'annually' },
    ]

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Header as='h1'>Create a Team</Header>
          <Form.Input
            label='Team Id'
            placeholder='A unique team identifier'
            name='teamId'
            {...errors.teamId ? { error: true } : {}}
          />
          <Form.Input
            label='Team Name'
            placeholder='A unique team name'
            name='teamName'
            {...errors.teamName ? { error: true } : {}}
          />
          <Form.Dropdown
            name='prizeOptions'
            label='Prize Options'
            placeholder='When are prizes awarded?'
            fluid multiple selection options={prizes}
          />
          <Form.TextArea
            label='Team Rules'
            placeholder='How long is each workout? What is required for each prize level?'
            name='teamDesc'
            {...errors.teamDesc ? { error: true } : {}}
          />
          <Form.Checkbox
            label='Allow anybody to sign up for this team'
            name='allowSignUp'
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
  getTeam: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func,
}

AddTeamForm.contextTypes = {
  router: React.PropTypes.object.isRequired,
}

export default AddTeamForm
