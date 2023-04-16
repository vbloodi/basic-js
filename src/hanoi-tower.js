const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsAmount = 0;
  let totalSeconds = 0;

  for (let i = 0; i < disksNumber; ++i) {
    turnsAmount = turnsAmount * 2 + 1;
  }

  totalSeconds = turnsAmount * (3600 / turnsSpeed);

  let result = { turns: turnsAmount, seconds: Math.floor(totalSeconds) };

  return result;
}

module.exports = {
  calculateHanoi,
};
