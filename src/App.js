import React, { Component } from 'react'
import './App.css'
import { Menu } from 'semantic-ui-react'
import { HomeView } from './views/Home/HomeView'
import { FitRecordView } from './views/FitRecord/FitRecordView'
import { TeamView } from './views/Team/TeamView'
import { AdminView } from './views/Admin/AdminView'
import Footer from './components/Footer'

const menuItems = [
  { name: 'Home' },
  { name: 'Fit Record' },
  { name: 'Team'},
  { name: 'Admin'},
]

class App extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }


  renderView = () => {
    const { activeItem } = this.state

    if (activeItem === 'Home') return <HomeView />
    if (activeItem === 'Fit Record') return <FitRecordView />
    if (activeItem === 'Team') return <TeamView />
    if (activeItem === 'Admin') return <AdminView />

    return <div>Unknown activeItem: {activeItem}</div>
  }

  render() {
    return (
      <div className="App">
        <div>
          <Menu items={menuItems} onItemClick={this.handleItemClick} />
          {this.renderView()}
      	</div>
        <Footer />
      </div>
    );
  }
}

export default App
