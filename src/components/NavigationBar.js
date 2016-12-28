import React, { Component } from 'react'
import { Link } from 'react-router'

class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">SimpleFit</Link>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/fitrecord">Fit Record</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/admin">Admin</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavigationBar
