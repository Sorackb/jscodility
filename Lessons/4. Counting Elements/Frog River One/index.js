const solution = (x, a) => {
  const numbers = new Set();

  for (let n = 1; n <= x; n += 1) {
    numbers.add(n);
  }

  for (let index = 0; index < a.length; index += 1) {
    const n = a[index];

    numbers.delete(n);

    if (numbers.size === 0) return index;
  }

  return -1;
};

module.exports = {
  solution,
};
