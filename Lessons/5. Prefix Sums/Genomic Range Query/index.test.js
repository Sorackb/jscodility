/* eslint-disable no-undef */
const { solution } = require('./');

const configure = (s, p, q, result) => {
  test(`5. Prefix Sums - Genomic Range Query - S=${s}, B=${p}, K=${q} => ${result}`, () => {
    expect(solution(s, p, q)).toEqual(result);
  });
};

configure('CAGCCTA', [2, 5, 0], [4, 5, 6], [2, 4, 1]);
