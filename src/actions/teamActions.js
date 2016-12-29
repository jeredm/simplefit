import axios from 'axios'

export function createTeam(teamData) {
  return dispatch => {
    return axios.post('/api/teams', teamData)
  }
}
