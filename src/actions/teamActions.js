import axios from 'axios'

export function createTeam(teamData) {
  return dispatch => {
    return axios.post('/api/teams', teamData)
  }
}

export function getTeam(teamName) {
  return dispatch => {
    return axios.get(`/api/teams/${teamName}`)
  }
}
