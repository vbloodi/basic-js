const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

const k = 0.693 / HALF_LIFE_PERIOD;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }
  let sampleNum = +sampleActivity;
  if (Boolean(sampleNum) === false) {
    return false;
  }
  if (sampleNum <= 0 || sampleNum > MODERN_ACTIVITY) {
    return false;
  }
  let result = Math.ceil(Math.log(MODERN_ACTIVITY / sampleNum) / k);
  return result;
}

module.exports = {
  dateSample,
};
