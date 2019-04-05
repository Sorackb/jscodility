/* eslint-disable no-undef */
const { solution } = require('./');

const configure = (a, b, f, result) => {
  test(`1. Company Employee - A=${a}, B=${b}, F=${f} => ${result}`, () => {
    expect(solution(a, b, f)).toEqual(result);
  });
};

configure([4, 2, 1], [2, 5, 3], 2, 10);
configure([7, 1, 4, 4], [5, 3, 4, 3], 2, 18);
configure([5, 5, 5], [5, 5, 5], 1, 15);
configure([1], [2], 1, 1);
