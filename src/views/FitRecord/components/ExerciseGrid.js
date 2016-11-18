import React, { Component, PropTypes } from 'react'
import { Card } from 'semantic-ui-react'
import _ from 'lodash'

export const parseExercises = (exercises) => {
	const exerciseCards = []

	_.each(exercises, exercise => {
		exerciseCards.push({
			key: exercise.name,
			color: exercise.color,
			image: exercise.image,
	    	header: _.startCase(exercise.name)
	    	// meta: 'Friend',
	    	// description: 'This is where the desc is',
	    	// extra: 'extra'
		})
	})

	return exerciseCards
}

class ExerciseGrid extends Component {
	static propTypes = {
		exercises: PropTypes.array
	}

	render () {
		const cards = parseExercises(this.props.exercises);

		return (
			<div>
				<Card.Group items={cards} stackable />
			</div>
		)
	}
}

export default ExerciseGrid