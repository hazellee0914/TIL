function solution(n, arr) {
  // 각 숫자와 자릿수 합 구하기 []
  let sums = arr.map((num) => {
    let sum = num
      .toString()
      // console.log(sum);
      .split('')
      // console.log(sum);
      .map((x) => Number(x))
      // console.log(sum);
      .reduce((a, b) => a + b, 0);
    // console.log(sum);
    return [num, sum];
  });

  // 최대값
  let res = sums[0][0];
  // console.log(res);
  let maxSum = sums[0][1];
  // console.log(maxSum);

  for (let [num, sum] of sums) {
    if (sum > maxSum) {
      maxSum = sum;
      res = num;
    } else if (sum === maxSum && num > res) {
      res = num;
      // console.log(num);
    }
  }
  return res;
}
let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

//  function solution(n, arr){
//              // 각 숫자를 문자열로 바꾸기
//              // 각 자릿수 숫자로 바꿔 합구하기
//              // 자릿수 합의 가장 큰 숫자
//              // 합이 같다면 , 숫자 자체가 큰 값
//              // 128 -> 11
//              // 460 -> 10

//              let res = ''
//              let maxSum = 0;

//              for(let x of arr){
//               // 합 구하기
//               let sum = x
//               .toString()
//               .split("")
//               .reduce((a, b) => a + Number(b), 0)

//               // 비교
//               if( sum > maxSum){
//                 maxSum = sum;
//                 console.log(maxSum);
//                 res = x
//                 console.log(res);
//               } else if(sum === maxSum && x > res){
//                 // 합이 같으면
//                 res = x;
//               }
//              }
//              return res
//             }

//             let arr=[128, 460, 603, 40, 521, 137, 123];
//             console.log(solution(7, arr));

// function solution(n, arr){
//     let answer, max=Number.MIN_SAFE_INTEGER;
//     for(let x of arr){
//         let sum=0, tmp=x;
//         while(tmp){
//             sum+=(tmp%10);
//             tmp=Math.floor(tmp/10);
//         }
//         if(sum>max){
//             max=sum;
//             answer=x;
//         }
//         else if(sum===max){
//             if(x>answer) answer=x;
//         }
//     }
//     return answer;
// }

// let arr=[128, 460, 603, 40, 521, 137, 123];
// console.log(solution(7, arr));
