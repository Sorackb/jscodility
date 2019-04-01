const solution = (a) => {
  const copy = [...a];
  const { length } = copy;

  copy.sort((a, b) => a - b);

  let index = 0;

  while (index < length) {
    const cur = copy[index];
    if (index >= length) return cur;
    index++;
    const next = copy[index];
    if (cur !== next) return cur
    index++;
  };

  return 0;
};

console.log(solution([9, 3, 9, 3, 7, 9])); // 7
console.log(solution([9, 3, 9, 3, 7, 9])); // 7
console.log(solution([1])); // 1