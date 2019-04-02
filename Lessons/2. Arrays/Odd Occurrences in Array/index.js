const solution = (a) => {
  const copy = [...a];
  const { length } = copy;

  copy.sort((e1, e2) => e1 - e2);

  let index = 0;

  while (index < length) {
    const cur = copy[index];
    if (index >= length) return cur;
    index += 1;
    const next = copy[index];
    if (cur !== next) return cur;
    index += 1;
  }

  return 0;
};

module.exports = {
  solution,
};
