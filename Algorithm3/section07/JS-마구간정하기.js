function count(stable, dist) {
  // 가장 가까운 두 말의 거리 최대화
  // 가능한 거리 값, 배치할수 있는지, Y/N -> 최적값 찾기

  let cnt = 1; // 첫번째 마구간 배치
  let lastPlaced = stable[0]; // 마지막 배치 말 위치

  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - lastPlaced >= dist) {
      cnt++;
      lastPlaced = stable[i];
    }
  }
  return cnt;
}
function solution(c, stable) {
  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1] - stable[0];
  let res = 0;

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (count(stable, mid) >= c) {
      res = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return res;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
