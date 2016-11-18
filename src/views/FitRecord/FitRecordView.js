import React, {Component} from 'react'
import WeeklyProgress from './components/WeeklyProgress'
import ExerciseGrid from './components/ExerciseGrid'
import exercises from './exercises.json'

export class FitRecordView extends Component {
	render() {
		return (
			<div>
				<WeeklyProgress />
				<ExerciseGrid exercises={exercises} />
			</div>
		)
	}
}