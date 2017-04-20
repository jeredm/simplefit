import React, { Component } from 'react'
import './App.css'
import { Menu, Container } from 'semantic-ui-react'
import { Link } from 'react-router'

class App extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className='App'>
        <Container fluid>
          <Menu>
            <Menu.Item header>SimpleFit</Menu.Item>
            <Menu.Item
              as={Link}
              to='/home'
              active={activeItem === 'Home'}
              name='Home'
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to='/fitrecord'
              active={activeItem === 'Fit Record'}
              name='Fit Record'
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to='/team'
              active={activeItem === 'Team'}
              name='Team'
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to='/admin'
              active={activeItem === 'Admin'}
              name='Admin'
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to='/prizes'
              active={activeItem === 'Prizes'}
              name='Prizes'
              onClick={this.handleItemClick}
            />
          </Menu>
          {this.props.children}
        </Container>
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.object,
}

export default App
