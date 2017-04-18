import axios from 'axios'

export function createPrize(prizeData) {
  return dispatch => {
    return axios.post('/api/prizes', prizeData)
  }
}

export function getPrize(prizeName) {
  return dispatch => {
    return axios.get(`/api/prizes/${prizeName}`)
  }
}

export function getPrizes() {
  return dispatch => {
    return axios.get('/api/prizes')
  }
}
