function solution(arr) {
  return arr.filter((num, i) => i === 0 || num > arr[i - 1]);
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
