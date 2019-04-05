// IMPACT is index + 1
const REFERENCE = ['A', 'C', 'G', 'T'];

const solution = (s, p, q) => {
  const map = [...s].map(letter => REFERENCE.indexOf(letter) + 1);
  const minimal = p.map((start, index) => {
    const end = q[index] + 1;
    return Math.min(...map.slice(start, end));
  });

  return minimal;
};

module.exports = {
  solution,
};
