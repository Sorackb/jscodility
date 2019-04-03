/* eslint-disable no-undef */
const { solution } = require('./');

const configure = (param, result) => {
  test(`3. Time Complexity - Tape Equilibrium - ${param} => ${result}`, () => {
    expect(solution(param)).toBe(result);
  });
};

configure([3, 1, 2, 4, 3], 1);
configure([-3, -1, -2, -4, -3], 1);
configure([-1000, 1000], 2000);
