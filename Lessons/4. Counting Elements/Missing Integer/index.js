const solution = (a) => {
  const copy = Array.from(new Set(a));
  copy.sort((el1, el2) => el1 - el2);

  return copy.reduce((should, item, index) => {
    if (item <= 0) return should;

    if (item !== should) {
      copy.splice(index + 1);
      return should;
    }

    return should + 1;
  }, 1);
};

module.exports = {
  solution,
};
