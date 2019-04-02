/* eslint-disable no-undef */
const { solution } = require('./');

const configure = ([a, k], result) => {
  test(`2. Arrays - Cyclic Rotation - a=${a}, k=${k} => ${result}`, () => {
    expect(solution(a, k)).toEqual(result);
  });
};

configure([[3, 8, 9, 7, 6], 3], [9, 7, 6, 3, 8]);
configure([[0, 0, 0], 1], [0, 0, 0]);
configure([[1, 2, 3, 4], 4], [1, 2, 3, 4]);
configure([[1, 2, 3, 4], 5], [4, 1, 2, 3]);
