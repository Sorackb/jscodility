const calculate = (a) => {
  let total = 0;

  return a.map((item) => {
    total += item;
    return total;
  });
};

const solution = (a) => {
  const left = calculate(a);
  left.splice(left.length - 1);
  const reverse = [...a].reverse();
  const right = calculate(reverse);
  right.splice(right.length - 1);
  right.reverse();
  const differences = left.map((item, index) => Math.abs(item - right[index]));
  return Math.min(...(differences || [1]));
};

module.exports = {
  solution,
};
