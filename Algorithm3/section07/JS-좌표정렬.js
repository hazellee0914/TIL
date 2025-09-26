function solution(arr) {
  // 2차원 배열 [x, y]
  // x값 오름차순
  // x값이 같으면 y값 오름차순

  arr.sort((a, b) => {
    if (a[0] === b[0]) {
      // x값이 같으면 y값으로 비교
      return a[1] - b[1];
    } else {
      // x값 비교
      return a[0] - b[0];
    }
  });
  return arr;
}

let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution(arr));
