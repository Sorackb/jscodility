/* eslint-disable no-undef */
const { solution } = require('./');

const configure = (a, b, k, result) => {
  test(`5. Prefix Sums - Count Divisible - A=${a}, B=${b}, K=${k} => ${result}`, () => {
    expect(solution(a, b, k)).toBe(result);
  });
};

configure(0, 1, 11, 1);
configure(6, 11, 2, 3);
configure(0, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, 2);
configure(0, 2000000000, 1, 2000000001);
