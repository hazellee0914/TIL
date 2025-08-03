function solution(arr) {
  // 홀수
  let oddNums = arr.filter((num) => num % 2 === 1);
  // 홀수 합
  let sum = oddNums.reduce((acc, cur) => acc + cur, 0);

  // 최솟값
  let min = Math.min(...oddNums);

  return [sum, min];
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
