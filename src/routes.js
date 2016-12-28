import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import HomeView from './views/Home/HomeView'
import FitRecordView from './views/FitRecord/FitRecordView'
import TeamView from './views/Team/TeamView'
import AdminView from './views/Admin/AdminView'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomeView} />
		<Route path="fitrecord" component={FitRecordView} />
		<Route path="team" component={TeamView} />
    <Route path="admin" component={AdminView} />
	</Route>
)
