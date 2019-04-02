const solution = (a, k) => {
  const remainder = k % a.length;
  const copy = [...a];

  if (remainder === 0) return copy;

  const floor = Math.floor(k / a.length);
  const movement = k - (floor * a.length);
  return [...copy.splice(copy.length - movement), ...copy];
};

module.exports = {
  solution,
};
