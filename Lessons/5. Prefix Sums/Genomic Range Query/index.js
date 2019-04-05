// IMPACT is index + 1
const REFERENCE = ['A', 'C', 'G', 'T'];

const solution = (s, p, q) => {
  const minimal = p.map((start, index) => {
    const end = q[index] + 1;
    const part = s.substring(start, end);
    const unique = Array.from(new Set([...part]));
    return REFERENCE.indexOf(unique.sort()[0]) + 1;
  });

  return minimal;
};

module.exports = {
  solution,
};
