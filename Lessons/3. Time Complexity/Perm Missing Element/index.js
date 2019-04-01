const solution = (a) => {
  const copy = [...a];
  const { length } = copy;

  copy.sort((a, b) => a - b);

  if (length === 0 || ![0, 1].includes(copy[0])) return 1;

  for (let index = 1; index < length; index++) {
    const expected = copy[index - 1] + 1;
    const cur = copy[index];

    if (expected !== cur) return expected;
  }

  return copy[length - 1] + 1;
};

console.log(solution([2, 3, 1, 5])); // 4
console.log(solution([2])); // 1
console.log(solution([])); // 1
console.log(solution([3, 1])); // 2