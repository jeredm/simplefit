import React, { Component } from 'react'
import './App.css'
import { Menu } from 'semantic-ui-react'
import { HomeView } from './views/Home/HomeView'
import { FitRecordView } from './views/FitRecord/FitRecordView'
import { TeamView } from './views/Team/TeamView'
import Footer from './components/Footer'

const menuItems = [
  { name: 'Home' },
  { name: 'Fit Record' },
  { name: 'Team'},
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
