import React from 'react'
import { Button, Form, Header } from 'semantic-ui-react'
import _ from 'lodash'
import { Message } from 'semantic-ui-react'

class AddPrizeForm extends React.Component {
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
        this.props.createPrize(formData)
      })
      .then(() => {
        this.props.addFlashMessage({
          type: 'info',
          header: 'Prize Created',
          text: 'You new prize has been added!',
        })
        this.context.router.push('/admin')
      })
      .catch(err => { this.setState({ errors: err }) })
  }

  isValid = (formData) => {
    return (
      new Promise((resolve, reject) => {
        this.validateInput(formData)
          .then(() => { return this.checkNameExists(formData) })
          .then(() => { return resolve(true) })
          .catch(err => { return reject(err) })
      })
    )
  }

  validateInput = (data) => {
    const errors = {}
    return (
      new Promise((resolve, reject) => {
        if (_.isEmpty(data.prizeName)) {
          errors.prizeName = 'Prize Name is a required field'
          reject(errors)
        }
        return resolve(true)
      })
    )
  }

  checkNameExists = (formData) => {
    const errors = {}
    return (
      new Promise((resolve, reject) => {
        this.props.getPrize(formData.prizeName)
          .then(res => {
            if (!_.isEmpty(res.data.prize)) {
              errors.prizeName = 'The prize name is already in use'
              return reject(errors)
            }
            return resolve(false)
          })
          .catch(err => {
            errors.prizeName = err.message
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
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Header as='h1'>Create a Prize</Header>
          <Form.Input
            label='Prize Name'
            placeholder='A unique name for the prize'
            name='prizeName'
            {...errors.prizeName ? { error: true } : {}}
          />
          <Form.TextArea
            label='Prize Description'
            placeholder='Describe the prize'
            name='description'
            {...errors.description ? { error: true } : {}}
          />
          <Form.Input
            label='Points Required'
            placeholder='The number of execises required'
            name='points'
            {...errors.points ? { error: true } : {}}
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

AddPrizeForm.propTypes = {
  createPrize: React.PropTypes.func.isRequired,
  getPrize: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func,
}

AddPrizeForm.contextTypes = {
  router: React.PropTypes.object.isRequired,
}

export default AddPrizeForm
