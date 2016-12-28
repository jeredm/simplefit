import React from 'react'
import NavigationBar from './components/NavigationBar'
import FlashMessageList from './components/FlashMessageList'

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<NavigationBar />
				<FlashMessageList />
				{this.props.children}
			</div>
		)
	}
}

export default App
