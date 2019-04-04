const solution = (a, b, k) => {
  const div1 = Math.floor(a / k);
  const div2 = Math.floor(b / k);
  let count = div2 - div1;

  if (a % k === 0) {
    count += 1;
  }

  return count;
};

module.exports = {
  solution,
};
