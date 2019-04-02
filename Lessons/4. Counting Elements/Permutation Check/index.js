const solution = (a) => {
  const copy = new Set(a);
  const [min, max, size, length] = [Math.min(...copy), Math.max(...copy), copy.size, a.length];
  return min === 1 && max === length && length === size ? 1 : 0;
};

module.exports = {
  solution,
};
