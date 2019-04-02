const convert = value => parseInt(value, 10).toString(2);

const solution = (n) => {
  const representation = convert(n);

  const { max: maximum } = [...representation].reduce((accumulator, item) => {
    let { started, max, cur } = accumulator;

    if (item === '1' && cur > max) max = cur;

    if (started) {
      if (item === '1') cur = 0;
      else cur += 1;
    } else if (item === '1') {
      started = true;
    }

    return { started, max, cur };
  }, { started: false, max: 0, cur: 0 });

  return maximum;
};

module.exports = {
  solution,
};
