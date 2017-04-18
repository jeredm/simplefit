import _ from 'lodash'

/**
 * Vaildates minimum input for the prize collection.
*/
export default function validateNewPrize(data) {
  const errors = {}

  if (_.isEmpty(data.prizeName)) {
    errors.prizeName = 'Prize Name is a required field'
  }

  return {
    errors,
    isValid: _.isEmpty(errors),
  }
}
