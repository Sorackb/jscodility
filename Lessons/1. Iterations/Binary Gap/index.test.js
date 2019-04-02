/* eslint-disable no-undef */
const { solution } = require('./');

const configure = (param, result) => test(`1. Interactions - Binary Gap - ${param} => ${result}`, () => expect(solution(param)).toBe(result));

configure(9, 2);
configure(529, 4);
configure(20, 1);
configure(15, 0);
configure(1041, 5);
configure(32, 0);
