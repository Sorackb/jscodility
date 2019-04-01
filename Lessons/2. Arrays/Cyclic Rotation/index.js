const solution = (a, k) => {
  const remainder = k % a.length;
  const copy = [...a];

  if (remainder === 0) return copy;

  const floor = Math.floor(k / a.length);
  const movement = k - (floor * a.length);
  return [...copy.splice(copy.length - movement), ...copy];
};

console.log(solution([3, 8, 9, 7, 6], 3)); // [9, 7, 6, 3, 8]
console.log(solution([0, 0, 0], 1)); // [0, 0, 0]
console.log(solution([1, 2, 3, 4], 4)); // [1, 2, 3, 4]
console.log(solution([1, 2, 3, 4], 5)); // [4, 1, 2, 3]