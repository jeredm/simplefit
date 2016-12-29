import React, { Component } from 'react'
import { Link } from 'react-router'
import { Menu } from 'semantic-ui-react'

class NavigationBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item header>SimpleFit</Menu.Item>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item name='fitrecord' active={activeItem === 'fitrecord'} onClick={this.handleItemClick}>
          <Link to='/fitrecord'>Fit Record</Link>
        </Menu.Item>
        <Menu.Item name='team' active={activeItem === 'team'} onClick={this.handleItemClick}>
          <Link to='/team'>Team</Link>
        </Menu.Item>
        <Menu.Item name='admin' active={activeItem === 'admin'} onClick={this.handleItemClick}>
          <Link to='/admin'>Admin</Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default NavigationBar
