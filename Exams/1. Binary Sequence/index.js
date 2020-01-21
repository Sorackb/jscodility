const solution = (a) => {
  const n = a.length;
  let i = n - 1;
  let result = -1;
  let maximal = 0;
  let k = 0;

  while (i >= 0) { // Here is the change
    if (a[i] === 1) {
      k += 1;

      if (k >= maximal) {
        maximal = k;
        result = i;
      }
    } else {
      k = 0;
    }

    i -= 1;
  }

  if (a[i] === 1 && k + 1 > maximal) {
    result = 0;
  }

  return result;
};

module.exports = {
  solution,
};
