const solution = (a, b, f) => {
  const diff = a.map((value, index) => ({
    a: value,
    b: b[index],
    i: index,
    diff: value - b[index],
  }));

  diff.sort((el1, el2) => el2.diff - el1.diff);

  const contribA = diff.slice(0, f);
  const contribB = diff.slice(f, a.length);
  const sumA = contribA.reduce((sum, item) => sum + item.a, 0);
  const sumB = contribB.reduce((sum, item) => sum + item.b, 0);

  return sumA + sumB;
};

module.exports = {
  solution,
};
