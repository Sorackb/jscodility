/* eslint-disable no-undef */
const { solution } = require('./');

const configure = (n, a, result) => {
  test(`4. Counting Elements - Maximum Counters - N=${n} A=${a} => ${result}`, () => {
    expect(solution(n, a)).toEqual(result);
  });
};

configure(5, [3, 4, 4, 6, 1, 4, 4], [3, 2, 2, 4, 2]);
