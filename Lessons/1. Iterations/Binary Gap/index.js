const convert = (value) => parseInt(value, 10).toString(2);

const solution = (n) => {
  const representation = convert(n);

  const { max } = [...representation].reduce((accumulator, item) => {
    let { started, max, cur } = accumulator;

    if (item === '1' && cur > max) max = cur;

    if (started) {
      if (item === '1') cur = 0;
      else cur++;
    } else if (item === '1') {
      started = true;
    }

    return { started, max, cur };
  }, { started: false, max: 0, cur: 0 });

  return max;
};

console.log(solution(9));    // 2
console.log(solution(529));  // 4
console.log(solution(20));   // 1
console.log(solution(15));   // 0
console.log(solution(1041)); // 5
console.log(solution(32));   // 0