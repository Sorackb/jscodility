const solution = (a) => {
  const copy = new Set(a);
  const [min, max, size, length] = [Math.min(...copy), Math.max(...copy), copy.size, a.length];
  return min === 1 && max === length && length === size ? 1 : 0;
};

console.log(solution([9, 5, 7, 3, 2, 7, 3, 1, 10, 8])); // 0
console.log(solution([4, 1, 3, 2])); // 1
console.log(solution([4, 1, 3])); // 0