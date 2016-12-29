import React from 'react'
import { Button, Form, Header } from 'semantic-ui-react'

class AddTeamForm extends React.Component {
  handleSubmit = (e, formData) => {
    e.preventDefault()
    this.setState(formData)
    this.props.createTeam(formData).then(
      () => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'Team added successfully',
        })
        this.context.router.push('/admin')
      },
      ({ data }) => this.setState({ errors: data })
    )
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Header as='h1'>Add Team</Header>
        <Form.Input
          label='Team Name'
          placeholder='Team Name'
          name='teamname'
        />
        <Form.TextArea
          label='Team Description'
          placeholder='Team Description'
          name='teamDesc'
        />
        <Form.Group>
          <Button primary type='submit'>Submit</Button>
          <Button onClick={() => {this.context.router.push('/admin')}}>Cancel</Button>
        </Form.Group>
      </Form>
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
