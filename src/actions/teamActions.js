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

export function getTeams() {
  return dispatch => {
    return axios.get('/api/teams')
  }
}

export function getTeamMembers() {
  return dispatch => {
    return axios.get('/api/teammembers')
  }
}

export function getTeamExercises() {
  return dispatch => {
    return axios.get('/api/exercise')
  }
}
