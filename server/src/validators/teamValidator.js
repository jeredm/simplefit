import _ from 'lodash'

/**
 * Vaildates minimum input for the team collection.
*/
export default function validateNewTeam(data) {
  const errors = {}

  if (_.isEmpty(data.teamName)) {
    errors.teamName = 'Team Name is a required field'
  }

  return {
    errors,
    isValid: _.isEmpty(errors),
  }
}
