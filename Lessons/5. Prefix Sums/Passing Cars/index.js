const solution = (a) => {
  const { length } = a;
  let west = 0;
  let sum = 0;

  for (let index = length - 1; index >= 0; index -= 1) {
    const car = a[index];

    if (car === 1) {
      west += 1;
    } else {
      sum += west;
    }

    if (sum > 1000000000) return -1;
  }

  return sum;
};

module.exports = {
  solution,
};
