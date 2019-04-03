/* eslint-disable no-undef */
const { solution } = require('./');

const configure = (param, result) => {
  test(`4. Counting Elements - Missing Integer - ${param} => ${result}`, () => {
    expect(solution(param)).toBe(result);
  });
};

configure([1, 3, 6, 4, 1, 2], 5);
configure([1, 2, 3], 4);
configure([-1, -3], 1);
