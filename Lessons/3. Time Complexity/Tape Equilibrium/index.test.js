/* eslint-disable no-undef */
const { solution } = require('./');

const configure = (param, result) => {
  test(`3. Time Complexity - Tape Equilibrium - ${param} => ${result}`, () => {
    expect(solution(param)).toBe(result);
  });
};

configure([3, 1, 2, 4, 3], 1);
configure([-3, -1, -2, -4, -3], 1);
// configure([2], 1);
configure([-1000, 1000], 2000);

// console.log(solution([3, 1, 2, 4, 3])); // 1
// console.log(solution([-1000, 1000])); // 1
// console.log(solution([])); // ?
// console.log(solution([3])); // 1
