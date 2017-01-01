import React, { Component } from 'react'
import './App.css'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div>
          <Menu>
            <Menu.Item header>SimpleFit</Menu.Item>
            <Menu.Item as={Link} to='home' activeClassName='active' name='Home' />
            <Menu.Item as={Link} to='fitrecord' activeClassName='active' name='Fit Record' />
            <Menu.Item as={Link} to='team' activeClassName='active' name='Team' />
            <Menu.Item as={Link} to='admin' activeClassName='active' name='Admin' />
          </Menu>
          {this.props.children}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.object,
}

export default App
