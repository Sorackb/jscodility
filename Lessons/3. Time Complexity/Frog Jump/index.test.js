/* eslint-disable no-undef */
const { solution } = require('./');

const configure = (x, y, d, result) => {
  test(`3. Time Complexity - Frog Jump - x=${x}, y=${y}, d=${d} => ${result}`, () => {
    expect(solution(x, y, d)).toBe(result);
  });
};

configure(10, 85, 30, 3);
