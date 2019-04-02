/* eslint-disable no-undef */
const { solution } = require('./');

const configure = (param, result) => {
  test(`2. Arrays - Odd Occurrences in Array - ${param} => ${result}`, () => {
    expect(solution(param)).toEqual(result);
  });
};

configure([9, 3, 9, 3, 7, 9], 7);
configure([9, 3, 9, 3, 7, 9], 7);
configure([1], 1);
