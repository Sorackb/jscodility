/* eslint-disable no-undef */
const { solution } = require('./');

const configure = (param, result) => {
  test(`5. Prefix Sums - Passing Cars - ${param} => ${result}`, () => {
    expect(solution(param)).toBe(result);
  });
};

configure([0, 1, 0, 1, 1], 5);
