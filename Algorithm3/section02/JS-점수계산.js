function solution(arr) {
  return arr.reduce(
    ([sum, score], cur) =>
      cur === 1 ? [sum + score + 1, score + 1] : [sum, 0],
    [0, 0]
  )[0];
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr)); // 1

// function solution(arr) {
//   const result = arr.reduce(
//     (acc, cur) => {
//       if (cur === 1) {
//         acc.score += 1; // 연속 맞춘 점수 증가
//         acc.sum += acc.score; // 총합에 더하기
//       } else {
//         acc.score = 0; // 틀리면 연속 점수 초기화
//       }
//       return acc;
//     },
//     { sum: 0, score: 0 } // 초기값
//   );

//   return result.sum;
// }

// let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
// console.log(solution(arr));

//  function solution(arr){
//        let sum = 0;
//        let score = 0;

//        for(let x of arr){
//         if(x === 1){
//           score++;
//         sum+=score
//                   } else{
//                     score =0
//                   }

//        }
//        return sum
//         }

//         let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
//         console.log(solution(arr));
