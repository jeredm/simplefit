import React, { Component } from 'react'
import { Header, Rating, Container } from 'semantic-ui-react'

class WeeklyProgress extends Component {
	render() {
		return (
			<div>
				<Header as='h1'>Weekly Progress</Header>
				<Container>
					<Rating maxRating={7} defaultRating={2} icon='star' size='massive' />
				</Container>
			</div>
		)
	}
}

export default WeeklyProgress