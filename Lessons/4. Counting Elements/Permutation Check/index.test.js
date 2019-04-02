/* eslint-disable no-undef */
const { solution } = require('./');

const configure = (param, result) => {
  test(`3. Time Complexity - Permutation Check - ${param} => ${result}`, () => {
    expect(solution(param)).toBe(result);
  });
};

configure([9, 5, 7, 3, 2, 7, 3, 1, 10, 8], 0);
configure([4, 1, 3, 2], 1);
configure([4, 1, 3], 0);
