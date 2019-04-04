/* eslint-disable no-undef */
const { solution } = require('./');

const configure = (param, result) => {
  test(`6. Sorting - Distinct - ${param} => ${result}`, () => {
    expect(solution(param)).toBe(result);
  });
};

configure([2, 1, 1, 2, 3, 1], 3);
