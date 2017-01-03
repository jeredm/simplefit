import axios from 'axios'

export function createTeam(teamData) {
  return dispatch => {
    return axios.post('/api/team', teamData)
  }
}

export function getTeam(teamName) {
  return dispatch => {
    return axios.get(`/api/team/${teamName}`)
  }
}

export function getTeams() {
  return dispatch => {
    return axios.get('/api/teams')
  }
}
