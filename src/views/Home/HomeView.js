import React, { Component } from 'react'
import ActivityFeed from './components/ActivityFeed'
import Challenge from './components/Challenge'
import { Header } from 'semantic-ui-react'

class HomeView extends Component {
  render() {
    return (
      <div>
        <Header as='h1'>What&apos;s Happening</Header>
        <ActivityFeed />
        <Challenge />
      </div>
    )
  }
}

export default HomeView
