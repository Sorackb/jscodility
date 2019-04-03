/* eslint-disable no-undef */
const { solution } = require('./');

const configure = (x, a, result) => {
  test(`4. Counting Elements - Frog River One - X=${x} A=${a} => ${result}`, () => {
    expect(solution(x, a)).toBe(result);
  });
};

configure(5, [1, 3, 1, 4, 2, 3, 5, 4], 6);
