/* eslint-disable no-undef */
const { solution } = require('./');

const configure = (a, result) => test(`1. Binary Sequence - ${a} => ${result}`, () => expect(solution(a)).toBe(result));

configure([0, 1, 1, 1, 0, 1, 1, 1, 0, 1], 1);
configure([0, 0], -1);
