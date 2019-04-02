/* eslint-disable no-undef */
const { solution } = require('./');

const configure = (param, result) => {
  test(`3. Time Complexity - Perm Missing Element - ${param} => ${result}`, () => {
    expect(solution(param)).toBe(result);
  });
};

configure([2, 3, 1, 5], 4);
configure([2], 1);
configure([], 1);
configure([3, 1], 2);
