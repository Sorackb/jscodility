/* eslint-disable no-undef */
const { solution } = require('./');

const configure = (a, k, result) => {
  test(`3. - A=${a}, K=${k} => ${result}`, () => {
    expect(solution(a, k)).toEqual(result);
  });
};

configure([1, 1, 3, 4, 3, 3, 4], 2, 5);
configure([4, 5, 5, 4, 2, 2, 4], 0, 2);
configure([1, 3, 3, 2], 2, 4);
