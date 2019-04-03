const solution = (n, a) => {
  const { length } = a;
  let counters = [];
  let all = 0;
  let max = 0;

  // Do the increments
  for (let index = 0; index < length; index += 1) {
    const step = a[index];

    if (step > n) {
      counters = [];
      all = max;
    } else {
      let current = counters[step - 1];
      current = current === undefined ? all : current;
      current += 1;
      counters[step - 1] = current;
      max = current > max ? current : max;
    }
  }

  // Fill with the all value when undefined
  for (let index = 0; index < n; index += 1) {
    const item = counters[index];
    counters[index] = item === undefined ? all : item;
  }

  return counters;
};

module.exports = {
  solution,
};
