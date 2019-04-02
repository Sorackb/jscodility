const solution = (a) => {
  const copy = [...a];
  const { length } = copy;

  copy.sort((el1, el2) => el1 - el2);

  if (length === 0 || ![0, 1].includes(copy[0])) return 1;

  for (let index = 1; index < length; index += 1) {
    const expected = copy[index - 1] + 1;
    const cur = copy[index];

    if (expected !== cur) return expected;
  }

  return copy[length - 1] + 1;
};

module.exports = {
  solution,
};
