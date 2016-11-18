import React, { Component } from 'react'
import ActivityFeed from './components/ActivityFeed'
import Challenge from './components/Challenge'
import { Grid } from 'semantic-ui-react'

export class HomeView extends Component {
	render() {
		return (
			<Grid columns={2}>
	      		<Grid.Column>
					<ActivityFeed />
		  		</Grid.Column>
				<Grid.Column>
					<Challenge />
				</Grid.Column>
			</Grid>
		)
	}
}