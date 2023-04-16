const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nString = String(n);
  let result = 0;

  for (let i = 0; i < nString.length; ++i) {
    let number = +(nString.slice(0, i) + nString.slice(i + 1));
    if (number > result) {
      result = number;
    }
  }

  return result;
}

module.exports = {
  deleteDigit,
};
