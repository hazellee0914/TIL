function solution(arr) {
  let n = arr.length;

  // 1. 행 합
  let rowSums = arr.map((row) => row.reduce((a, b) => a + b, 0));

  // 2. 열 합
  let colSums = arr[0].map((_, colIdx) =>
    arr.reduce((sum, row) => sum + row[colIdx], 0)
  );

  // 3. 대각선 합
  let diag1 = arr.reduce((sum, row, i) => sum + row[i], 0); // ↘
  let diag2 = arr.reduce((sum, row, i) => sum + row[n - i - 1], 0); // ↙

  // 모든 합 중 최대값
  return Math.max(...rowSums, ...colSums, diag1, diag2);
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));

// function solution(arr){
//       // 5 * 5
//       // 각 행의 합
//       // 각 열의 합
//       // 두 대각선의 합
//       // 그 중 가장 큰 합

//       let n = arr.length;
//       let res = Number.MIN_SAFE_INTEGER;  // 아주 작은 수로 시작

//       // 1. 각 행의 합
//       for(let i = 0; i < n; i++){
//         let rowSum = 0;
//         let colSum = 0;
//         for(let j = 0; j < n; j++){
//           rowSum += arr[i][j];  // i번째 행 합
//           colSum += arr[i][j]; // i번째 열 합
//         }
//         res = Math.max(res, rowSum, colSum)
//       }

//       // 대각선 합
//       let diag1 = 0
//       let diag2 =0;
//       for(let i = 0; i < n; i++){
//         diag1 += arr[i][i]
//         diag2 += arr[i][n - i - 1]
//       }
//       res = Math.max(res, diag1, diag2)
//       return res;
//         }

//         let arr=[[10, 13, 10, 12, 15],
//                  [12, 39, 30, 23, 11],
//                  [11, 25, 50, 53, 15],
//                  [19, 27, 29, 37, 27],
//                  [19, 13, 30, 13, 19]];
//         console.log(solution(arr));
