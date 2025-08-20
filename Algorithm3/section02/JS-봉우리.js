function solution(arr) {
  let n = arr.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  return arr
    .flatMap(
      (row, i) => row.map((val, j) => ({ val, i, j })) // 좌표 + 값 묶어서 객체로
    )
    .reduce((count, { val, i, j }) => {
      let isPeak = dx.every((_, k) => {
        let nx = i + dx[k];
        let ny = j + dy[k];
        // 범위 안이면 비교, 아니면 true로 간주
        return nx < 0 || nx >= n || ny < 0 || ny >= n || val > arr[nx][ny];
      });
      return count + (isPeak ? 1 : 0);
    }, 0);
}
let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));

// function solution(arr){
// let n = arr.length;
// let answer = 0;
// let dx = [-1, 0, 1, 0];
// let dy = [0, 1, 0, -1];
//   for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     let isPeak = true;
//     for (let k = 0; k < 4; k++) {
//       let nx = i + dx[k];
//       let ny = j + dy[k];
//       // 격자 안쪽만 비교 (범위 벗어나면 무시)
//       if (
//         nx >= 0 &&
//         nx < n &&
//         ny >= 0 &&
//         ny < n &&
//         arr[i][j] <= arr[nx][ny]
//       ) {
//         isPeak = false;
//         break;
//       }
//     }
//     if (isPeak) answer++;
//   }
// }
// return answer;

//           }

//           let arr=[[5, 3, 7, 2, 3],
//                    [3, 7, 1, 6, 1],
//                    [7, 2, 5, 3, 4],
//                    [4, 3, 6, 4, 1],
//                    [8, 7, 3, 5, 2]];
//           console.log(solution(arr));
